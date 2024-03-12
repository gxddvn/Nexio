import React from 'react';
import styles from "./Reg.module.css";
import { useForm } from 'react-hook-form';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRegister, selectIsAuth } from '../../../Redux/Slices/auth';
import { useSelector } from 'react-redux';

const Reg = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const {
        register, 
        handleSubmit, 
        formState: { errors, isValid },
        reset
    } = useForm({ 
        defaultValues: {
            login: "",
            email: "", 
            name: "",
            p_num: "",
            password: "",
            c_password: "",
        }, 
        mode: "onBlur",
    });

    const onSubmit = async (values) => {
        console.log(values);
        const data = await dispatch(fetchRegister(values));
        console.log(data.error);
        if (!data.payload) {
            alert("Не вдалось зареєструватися, не правильно введені дані або такий користувач вже існує!");
        } else if (data.payload) {
            if ("token" in data.payload) {
                window.localStorage.setItem("token", data.payload.token);
            }
        }
        reset();
    };

    if (isAuth) {
        return <Navigate to='/' />;
    }

    return (
        <div className={styles.r_main}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.rm_container}>
                <span className={styles.rmc_span_title}>Registration</span>
                <div className={styles.rmc_cont}>
                    <div className={styles.rmc_block}>
                        <span className={styles.rmc_span1}>Login</span>
                        <input type="text" className={styles.rmc_input} placeholder='Type your login...' {...register("login", { required: "Type your Login!", minLength: {value:5, message:"From 5 to 20 characters"}, maxLength: {value:20, message:"From 5 to 20 characters"} })}/>
                        <div className={styles.rmc_errorblock}>{errors?.login && <p className={styles.rmc_errors}>{errors?.login?.message || "Error!"}</p>}</div>
                    </div>
                    <div className={styles.rmc_block}>
                        <span className={styles.rmc_span1}>Email</span>
                        <input type="email" className={styles.rmc_input} placeholder='Type your email...' {...register("email", { required: "Type your Email!" })}/>
                        <div className={styles.rmc_errorblock}>{errors?.email && <p className={styles.rmc_errors}>{errors?.email?.message || "Error!"}</p>}</div>
                    </div>
                    <div className={styles.rmc_block}>
                        <span className={styles.rmc_span1}>Full Name</span>
                        <input type="text" className={styles.rmc_input} placeholder='Type your full name...' {...register("name", { required: "Type your Full name!", minLength: {value:5, message:"From 5 to 20 characters"}, maxLength: {value:20, message:"From 5 to 20 characters"} })}/>
                        <div className={styles.rmc_errorblock}>{errors?.name && <p className={styles.rmc_errors}>{errors?.name?.message || "Error!"}</p>}</div>
                    </div>
                    <div className={styles.rmc_block}>
                        <span className={styles.rmc_span1}>Phone</span>
                        <input type="tel" className={styles.rmc_input} placeholder='Type your phone number...' {...register("p_num", { required: "Type your Phone Number!", pattern: {value: /[0-9]{6}/, message:"Only number, min 6"}})}/>
                        <div className={styles.rmc_errorblock}>{errors?.p_num && <p className={styles.rmc_errors}>{errors?.p_num?.message || "Error!"}</p>}</div>
                    </div>
                    <div className={styles.rmc_block}>
                        <span className={styles.rmc_span1}>Password</span>
                        <input type="password" className={styles.rmc_input} placeholder='Type your password...' {...register("password", { required: "Type your Password!", pattern: {value: /[A-Z a-z 0-9]{8}/, message:"From 8 to 16 characters"}})}/>
                        <div className={styles.rmc_errorblock}>{errors?.password && <p className={styles.rmc_errors}>{errors?.password?.message || "Error!"}</p>}</div>
                    </div>
                    <div className={styles.rmc_block}>
                        <span className={styles.rmc_span1}>Confirm Password</span>
                        <input type="password" className={styles.rmc_input} placeholder='Type your password...' {...register("c_password", { required: "Confirm your Password!", pattern: {value: /[A-Z a-z 0-9]{8}/, message:"From 8 to 16 characters"}})}/>
                        <div className={styles.rmc_errorblock}>{errors?.c_password && <p className={styles.rmc_errors}>{errors?.c_password?.message || "Error!"}</p>}</div>
                    </div>
                </div>
                <button type="submit" disabled={!isValid} className={styles.rmc_button}>Create an account</button>
                <span className={styles.rmc_span}>Already have an account? <NavLink to='/auth/login' className={styles.rmc_span_reg}>Login.</NavLink></span>
            </form>
        </div>
    )
}

export default Reg