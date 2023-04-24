import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import { Link } from "react-router-dom";


import { Input } from '../../components/Input/index'
import { Button } from '../../components/Button/index'
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const { signIn } = useAuth();

    function handleSignIn(){
        signIn({ email, password });
    }
 


    return (
        <Container>

            <Form>

                <h1>RocketMovies</h1>
                <p> Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange = { e => setEmail(e.target.value)}

                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange = { e => setPassword(e.target.value)}
                />

                <Button title= "Entrar" onClick= {handleSignIn}/>

                 <Link to= '/register'>
                   Criar Conta
                 
                 </Link>
                
               

            </Form>

            <Background/>

        </Container>



    );

}