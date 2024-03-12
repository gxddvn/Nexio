import React from 'react'
import styles from "./Login.module.css";
import { NavLink, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../../../Redux/Slices/auth';

const Login = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const {
        register, 
        handleSubmit, 
        formState: { errors, isValid },
        reset
    } = useForm({ 
        defaultValues: {
            log_email: "",
            password: "",
        }, 
        mode: "onBlur",
    });

    const onSubmit = async (values) => {
        console.log(values);
        reset();
        const data = await dispatch(fetchAuth(values));
        if (!data.payload) {
            alert("Не вдалось авторизуватися, не правильний пароль або пошта!");
        }
        console.log(data.payload)
        // if ("token" in data.payload) {
        //     window.localStorage.setItem("token", data.payload.token);
        // }
    };

    if (isAuth) {
        return <Navigate to='/' />;
    }

    return (
        <div className={styles.l_main}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.lm_container}>
                <span className={styles.lmc_span_title}>Login</span>
                <div className={styles.lmc_block}>
                    <span className={styles.lmc_span1}>Login or email</span>
                    <input type="text" className={styles.lmc_input} placeholder='Type your login or email...' {...register("log_email", { required: "Type your Login or Email!" })}/>
                    <div className={styles.lmc_errorblock}>{errors?.log_email && <p className={styles.lmc_errors}>{errors?.log_email?.message || "Error!"}</p>}</div>
                </div>
                <div className={styles.lmc_block}>
                    <span className={styles.lmc_span1}>Password</span>
                    <input type="password" className={styles.lmc_input} placeholder='Type your password...' {...register("password", { required: "Type your Password!", pattern: {value: /[A-Z a-z 0-9]{8}/, message:"From 8 to 16 characters"}})}/>
                    <div className={styles.lmc_errorblock}>{errors?.password && <p className={styles.lmc_errors}>{errors?.password?.message || "Error!"}</p>}</div>
                </div>
                <button type="submit" disabled={!isValid} className={styles.lmc_button}>Login</button>
                <span className={styles.lmc_span}>Not registered yet? <NavLink to='/auth/reg' className={styles.lmc_span_reg}>Create an account.</NavLink></span>
            </form>
        </div>
    )
}

export default Login