import Input from '../General/Input';
import Button from '../General/Button';
import Logo from '../General/LogoRegister';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpin from 'react-loading-spin';
import axios from 'axios';
import styled from 'styled-components';

export default function Register () {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function refreshOnError () {
        window.location.reload(false);
    }

    function registerUser () {

        setLoading(true);
        const promise = axios.post('http://localhost:5000/sign-up', {

            name,
            username,
            password,
            passwordConfirmation

        });

        promise.then (response => {

            setLoading(false);

            navigate('/'); 

        });

        promise.catch (e => {

            setLoading(false);

            console.log(e);

            alert('Sentimos muito, mas correu um erro. Por favor, tente novamente.   ( 0 _ 0 )');
            
            refreshOnError();

        });

    }

    return (

        <RegisterBody>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <RegisterContainer>
                <Input type={'text'} placeholder={'Nome'} value={name} onChange={(e) => setName(e.target.value)}/>
                <Input type={'text'} placeholder={'Usuário'} value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Input type={'password'} placeholder={'Senha'} value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Input type={'password'} placeholder={'Confirme a senha'} value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                <Button onClick={registerUser}>
                    {loading ? (<LoadingSpin primaryColor={'#FFFFFF'} secondaryColor={'transparent'} size={'35px'} width={8} />
                        ) : (
                            'Cadastrar'        
                        ) 
                    }
                </Button>
                <StyledLink to='/'>Já possui uma conta? Entre!</StyledLink>
            </RegisterContainer>
        </RegisterBody>
    );

}

const RegisterBody = styled.div`

    display: flex;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const LogoContainer = styled.div`

    height: 200px;
    width: 350px;

`;

const RegisterContainer = styled.div`

    height: 100%;
    width: 375px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;

`;

const StyledLink = styled(Link)`

    margin-top: 15px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;

`;