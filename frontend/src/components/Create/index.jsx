import React, { useRef, useState } from 'react';
import styles from "./Create.module.css";
import { NavLink } from 'react-router-dom';
import Caman from 'caman';


const Create = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [imageUrl, setImageUrl] = useState();
    const canvasRef = useRef();

    React.useEffect(() => {
        if (imageUrl) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            
            const image = new Image();
            image.src = imageUrl;
            image.onload = () => {
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image, 0, 0);
            };
        }
    }, [imageUrl]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImageUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    // const applyFilter = (filter) => {
    //     Caman(canvasRef.current, function () {
    //       this.revert(); // Сброс всех предыдущих изменений
    //       this[filter]().render(); // Применение выбранного фильтра
    //     });
    // };
    console.log(selectedFile);
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
            <div className={styles.cm_block}>
                    {imageUrl ? (
                        <img src={imageUrl} alt="" className={styles.cmb_img}/>
                    ) : (
                        <div className={styles.cmb_cont1}>
                            <label htmlFor="input_file" className={styles.cmb_newpost2}></label>
                            <input type="file" id="input_file" name="file" accept="image/*, video/*" onChange={handleFileChange} className={styles.cmbc1_input} />
                            <p className={styles.cmb_p}>Add to new post photo or video...</p>
                        </div>
                    )}
                <div className={styles.cmb_editoptions}></div>
            </div>
        </div>
    )
}

export default Create;