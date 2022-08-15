import Input from '../General/Input';
import Button from '../General/Button';
import Logo from '../General/LogoRegister';
import BackArrow from '../General/BackArrow';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpin from 'react-loading-spin';
import axios from 'axios';
import styled from 'styled-components';

export default function KidRegistration () {

    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [guardianName, setGuardianName] = useState('');
    const [guardianPhone, setGuardianPhone] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function refreshOnError () {
        window.location.reload(false);
    }

    function registerKid () {

        setLoading(true);
        const promise = axios.post('http://localhost:5000/register-r', {

            guardianName,
            guardianPhone
            
        });

        promise.then (response => {

            const guardianId = response.data[0];

            const secondPromise = axios.post('http://localhost:5000/register-c', {

                name,
                birthDate,
                guardianId

            });

            secondPromise.then(secondResponse => {

                const registered = secondResponse.data;

                setLoading(false);

                navigate('/'); 

            });

        })

        promise.catch (e => {

            setLoading(false);

            console.log(e);

            alert('Sentimos muito, mas correu um erro. Por favor, tente novamente.   ( 0 _ 0 )');
            
            refreshOnError();

        })

    }

    return (

        <RegisterBody>
            {/* <BackArrow /> */}
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <RegisterContainer>
                <KidInfoContainer>
                    <Title>Dados da Criança</Title>
                    <Input type={'text'} placeholder={'Nome completo'} value={name} onChange={(e) => setName(e.target.value)}/>
                    <Input type={'text'} placeholder={'Data de nascimento (dd/mm/aaaa)'} value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>
                </KidInfoContainer>
                <GuardianInfoContainer>
                    <Title>Dados do Responsável</Title>
                    <Input type={'guardianName'} placeholder={'Nome completo'} value={guardianName} onChange={(e) => setGuardianName(e.target.value)}/>
                    <Input type={'guardianName'} placeholder={'Telefone (obs: sem DDD)'} value={guardianPhone} onChange={(e) => setGuardianPhone(e.target.value)}/>
                </GuardianInfoContainer>
                <Button onClick={registerKid}>
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

    position: absolute;
    margin-top: 710px;

    height: 100%;
    width: 375px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;

`;

const Title = styled.p`

    font-weight: bold;
    color: #123524;

`;

const KidInfoContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const GuardianInfoContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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