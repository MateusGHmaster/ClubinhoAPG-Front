import Logo from '../General/LogoLogin';
import Input from '../General/Input';
import Button from '../General/Button';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; 
import LoadingSpin from 'react-loading-spin';
import axios from 'axios';
import styled from 'styled-components';
import loginWallpaper from '../../assets/C2.jpg';


export default function Login () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [admin, setAdmin] = useState(false);
    const { setToken } = useContext(AuthContext);

    const navigate = useNavigate();

    function loginUser () {

        setLoading(true);

        const promise = axios.post ('http://localhost:5000/login', {

            username,
            password

        });

        promise.then (response => {

            setLoading(false);

            const { data } = response;

            localStorage.setItem('token', JSON.stringify(data[0]));
            
            setToken(data[0]);
            setAdmin(data[1].isAdmin);

            navigate('/home',{state: { admin: data[1].isAdmin  }});

        })

        promise.catch (e => {

            setLoading(false);

            console.log(e);

            alert('Sentimos muito, mas correu um erro. Por favor, tente novamente.   ( 0 _ 0 )');
        
        })
    }

    return (
        <>
            <BackgroundColor></BackgroundColor>
            <Wallpaper src={loginWallpaper} alt={'papel de parede'}/>
            <LoginBody>
                <Logo />
                <LoginContainer>
                    <Input type={'text'} placeholder={'Usuário'} value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <Input type={'password'} placeholder={'Senha'} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Button onClick={loginUser}>
                        {loading ? (<LoadingSpin primaryColor={'#FFFFFF'} secondaryColor={'transparent'} size={'35px'} width={8} />
                            ) : (
                                'Entrar'        
                            ) 
                        }
                    </Button>
                    <StyledLink href='https://api.whatsapp.com/send?phone=5592992924104' target='_blank'>Não tem uma conta? Peça aqui!</StyledLink>
                </LoginContainer>
            </LoginBody>
        </>
    );

}

const LoginBody = styled.div`

    height: 100vh;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;

`;

const BackgroundColor = styled.div`

    position: absolute;

    margin-top: -50px;
    margin-left: -10px;

    height: 100%;
    width: 100%;

    background-color: #7cd756;
    /* background-color: gray; */

    opacity: 0.8;

    z-index: 1;

`;

const Wallpaper = styled.img`

    margin-top: -50px;
    margin-left: -10px;

    position: absolute;

    background-position: top;  
    background-size: cover; 

`

const LoginContainer = styled.div`

    height: 100vh;
    display: flex;
    margin-top: -250px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;

    z-index: 1;

`;

const StyledLink = styled.a`

    height: 15px;
    width: 340px;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;

`;