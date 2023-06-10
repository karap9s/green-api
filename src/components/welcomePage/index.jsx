import React, {useEffect, useState} from 'react';
import styles from "./index.module.css";
import CustomInput from "../../componentUtils/CustomInput/CustomInput.jsx";

const WelcomePage = ({setData}) => {
    const [id, setId] = useState("");
    const [token, setToken] = useState("");


    return (
        <div className={styles.wrapper}>
            <h1 className={styles.main_heading}>Добро пожаловать!</h1>
            <>
                <h3 className={styles.additional_heading}>idInstance</h3>
                <CustomInput callback={(e) => setId(e.target.value)} placeholder={"Введите ваши данные"}/>
            </>

            <>
                <h3 className={styles.additional_heading}>apiTokenInstance</h3>
                <CustomInput callback={(e) => setToken(e.target.value)} placeholder={"Введите ваши данные"}/>
            </>

            <button onClick={() => {
                localStorage.setItem("id", id);
                localStorage.setItem("token", token);
                setData({id: id, token: token});
            }} className={styles.submit_btn}>Войти
            </button>
        </div>
    );
};

export default WelcomePage;
