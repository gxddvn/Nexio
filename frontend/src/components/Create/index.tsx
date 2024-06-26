import React, { useState } from 'react';
import styles from "./Create.module.css";
import { NavLink, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { selectAuthData, selectIsAuth } from '../../Redux/Slices/auth';
import axios from '../../axios';
import { RootState } from '../../Redux/store';

interface PostObjInter {
    caption: string; 
    input_media: FileList; 
    user_id: string;
}

const Create = () => {
    const [imageUrl, setImageUrl] = useState<string | null>();
    const [post, setPost] = useState<PostObjInter | null>();
    const [isEnd, setIsEnd] = useState(false);
    const isAuth = useSelector<RootState>(selectIsAuth);
    // const user: ObjDataInterface = useSelector<RootState>((state) => state.auth.user || []);
    // const user = useSelector<RootState>(selectAuthData)
    const AuthData = useSelector(selectAuthData)

    const handleFileChange = (event: { target: { files: any[]; }; }) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                setImageUrl(reader.result);
            }
        };
        reader.readAsDataURL(file);
    };

    const {
        register, 
        handleSubmit, 
        formState: { errors, isValid },
        reset
    } = useForm({ 
        defaultValues: {
            input_media : {},
            caption: "",
            user_id: AuthData.user ? AuthData.user.id : null,
        }, 
        mode: "onBlur",
    });

    const onSubmit = async (values: PostObjInter | {}) => {
        setPost(values as PostObjInter);
        // setImageUrl();
        reset();
    };

    React.useEffect(() => {
        if(isAuth && post) {
            const formData = new FormData();
            formData.append('file', post.input_media[0]);
            formData.append('caption', post.caption);
            formData.append('id_profile', post.user_id);
            axios.post(`/publication/`, formData)
            .then((res) => {
                console.log(res.data);
                setIsEnd(true);
            })
            .catch((err) => {
                console.warn(err);
                alert("Error!");
            });
        }
    }, [isAuth, post])

    if (!isAuth || isEnd) {
        return <Navigate to='/' />;
    }

    return (
        <div className={styles.c_main}>
            <div className={styles.c_head}>
                <div className={styles.ch_cont}>
                    <span className={styles.chc_span}>Create</span>
                </div>
            </div>
            <div className={styles.cm_buttlist}>
                <div className={styles.cmb_cont}>
                    <NavLink to='/' className={styles.cmb_home}></NavLink>
                    <NavLink to='/search' className={styles.cmb_search}></NavLink>
                    <NavLink to='/create' className={styles.cmb_newpost}></NavLink>
                    <NavLink to='/notifications' className={styles.cmb_notification}></NavLink>
                    <NavLink to='/direct' className={styles.cmb_direct}></NavLink>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.cm_block} encType="multipart/form-data">
                {imageUrl ? (
                    <img src={imageUrl} alt="" className={styles.cmb_img}/>
                ) : (
                    <div className={styles.cmb_cont1}>
                        <label htmlFor="input_file" className={styles.cmb_newpost2}></label>
                        <input type="file" id="input_file" accept="image/*, video/*"  className={styles.cmbc1_input} {...register("input_media", {onChange: handleFileChange, required: "Select file!"})} />
                        <div className={styles.cmb_errorblock}>{errors?.input_media && <p className={styles.cmb_errors}>{errors?.input_media?.message || "Error!"}</p>}</div>
                        <p className={styles.cmb_p}>Add to new post photo or video...</p>
                    </div>
                )}
                <div className={styles.cmb_editoptions}>
                    <span className={styles.cmbe_span}>Caption: </span>
                    <input type="text" className={styles.cmbe_input} {...register("caption")}/>
                </div>
                <button type="submit" disabled={!isValid} className={styles.cmb_button}>Submit</button>
            </form>
        </div>
    )
}

export default Create;