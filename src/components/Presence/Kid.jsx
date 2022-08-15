import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import infoIcon from '../../assets/info.png';
import dayjs from 'dayjs';
import axios from 'axios';
import { useState } from 'react';


export default function Kid ({ id, name, isPresent }) {
    
    const date = new dayjs().format('DD-MM-YYYY');
    const [presence, setPresence] = useState(isPresent);
    const navigate = useNavigate();

    function kidPresence () {

        const promise = axios.post('http://localhost:5000/presence', {

            kidId: id,
            date,
            isPresent: !presence


        });

        promise.then (response => {

            setPresence(!presence);

        });

        promise.catch (e => {

            console.log(e);
        
        });

    }

    return (
        
        <KidContainer>
            <KidName>{name}</KidName>
            <PresenceToggle onClick={() => kidPresence()}>
                { presence ? (<Present>PRESENTE</Present>) : (<Absent>AUSENTE</Absent>) }
            </PresenceToggle>
            <KidInfo src={infoIcon} alt={'info'} onClick={() => {navigate(`/info/${id}`,{state: { id: id }})}} />
        </KidContainer>
    
    );

}

const KidContainer = styled.div`

    position: relative;

    height: 45px;
    width: 360px;

    padding-left: 5px;
    padding-right: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid transparent;
    border-radius: 8px;

    background-color: white;

`;

const KidName = styled.div`

    position: absolute;

    height: 25px;
    width: 275px;

    display: flex;
    align-items: center;

    font-size: 15px;

`;

const PresenceToggle = styled.div`

    position: absolute;

    margin-left: 255px;

    height: fit-content;
    width: fit-content;

    border: 1px solid transparent;
    border-radius: 8px;

`;

const Present = styled.div`

    margin-left: -5px;
    padding: 5px;

    height: fit-content;
    width: fit-content;

    font-size: 15px;
    
    background-color: green;

    border: 1px solid transparent;
    border-radius: 8px;

    color: white;

`;

const Absent = styled.div`

    padding: 5px;

    height: fit-content;
    width: fit-content;

    font-size: 15px;

    background-color: red;

    border: 1px solid transparent;
    border-radius: 8px;

    color: white;

`;

const KidInfo = styled.img`

    height: 20px;
    width: 20px;

    display: flex;
    align-items: center;

    margin-left: 338px;

    z-index: 1;

`;