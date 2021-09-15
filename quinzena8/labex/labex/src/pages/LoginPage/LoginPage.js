import React from 'react';
import { useState } from "react";
import axios from 'axios';



export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:jonathan/login, body`)
            .then((response) => {
            
            })
    };

    return (
        <div>
            <input
                placeholder="email"
                type="email"
                value={email}
                onChange={onChangeEmail}
            />
            <input 
                placeholder="password"
                type="password"
                value={password}
                onChange={onChangePassword}
            />
            <button onClick={onSubmitLogin}>Enviar</button>
        </div>
    );
};