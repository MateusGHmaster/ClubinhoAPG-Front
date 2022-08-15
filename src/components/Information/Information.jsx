import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

export default function Information () {

    const [kidInfo, setKidInfo] = useState(null);

    const location = useLocation();
    const { id } = location.state; 

    function getKidInfo () {

        const promise = axios.get (`http://localhost:5000/info/${id}`);

        promise.then (response => {

            const {data} = response;

            setKidInfo(data);

        });
        promise.catch (e => {

            console.log(e);

            alert ('Algo deu errado. Vamos tentar de novo.  ╭( ･ㅂ･)و');

        });

    }

    useEffect(() => {

        getKidInfo();

    }, []);

    if (kidInfo !== null) {

        return (

            <InfoBody>
                <Title>Informações de {kidInfo.name}</Title>
                <InfoContainer>
                    <KidName><Legend>Nome completo:</Legend><KidInfo>{kidInfo.name}</KidInfo></KidName>
                    <BirthDate><Legend>Data de nascimento:</Legend><KidInfo>{kidInfo.birthDate}</KidInfo></BirthDate>
                    <GuardianName><Legend>Nome do responsável:</Legend><KidInfo>{kidInfo.guardian.guardianName}</KidInfo></GuardianName>
                    <GuardianPhone><Legend>Telefone do responsável:</Legend><KidInfo><StyledLink href={`https://api.whatsapp.com/send?phone=5592${kidInfo.guardian.guardianPhone}`} target='_blank'>{kidInfo.guardian.guardianPhone}</StyledLink></KidInfo></GuardianPhone>
                </InfoContainer>
            </InfoBody>
    
        );

    } else {
        return (<p>Loading...</p>);
    }

}

const InfoBody = styled.div`

    margin-top: 50px;

    display: flex;
    flex-direction: column;

`;

const InfoContainer = styled.div`

    position: absolute;

    margin-top: 200px;
    left: 10px;

    width: 375px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;

`;

const Title = styled.p`

    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;

    width: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    font-size: 20px;
    font-weight: bold;

`;

const Legend = styled.p`

    font-weight: bold;

`;

const KidInfo = styled.div`

    font-size: 23px;

`;

const KidName = styled.div`

    font-size: 16px;

`;

const BirthDate = styled.div`

    font-size: 16px;

`;

const GuardianName = styled.div`

    font-size: 16px;

`;

const GuardianPhone= styled.div`

    font-size: 16px;

`;

const StyledLink = styled.a`

    font-size: 23px;

`;
