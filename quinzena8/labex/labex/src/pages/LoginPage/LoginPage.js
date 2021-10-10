import React from 'react';
import "./styled";
import useForm from '../../hooks/useForm';
import { Container } from './styled';

    const LoginPage = () => {
        const { form, onChange, cleanFields } = useForm({
            email: "",
            password: ""
        });

        const login = (event) => {
            event.preventDefault() 
            cleanFields();  
        };
    

        return (
            <Container>
                <h1>Login</h1>
                <form onSubmit={login}>
                    <input 
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        placeholder="email"
                        required
                        type={"email"}
                    />
                    <input 
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        placeholder="password"
                        required
                        type={"password"}   
                    />
                    <button>Enviar</button>
                </form>
            </Container>
    );
};

export default LoginPage;