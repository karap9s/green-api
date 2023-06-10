import React from 'react';
import {Button, Form, Input} from "antd";
import styles from "./index.module.css";

const WelcomePage = () => {
    const {Item} = Form;
    const onFinish = (val) => {
        try {
            console.log(val);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className={styles.wrapper}>
            <h1>Добро пожаловать!</h1>
            <Form className={styles.form} onFinish={onFinish} name="login">
                <h3>idInstance</h3>
                <Item>
                    <Input/>
                </Item>
                <h3>apiTokenInstance</h3>
                <Item>
                    <Input/>
                </Item>
                <Button className={styles.submit_btn}>Войти</Button>
            </Form>
        </div>
    );
};

export default WelcomePage;
