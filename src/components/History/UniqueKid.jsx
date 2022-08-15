import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UniqueKid ({ id }) {

    const navigate = useNavigate();
    const [kid, setKid] = useState([]);

    function getPresentKidsName () {

        const promise = axios.get(`http://localhost:5000/kid/${id}`);

        promise.then(response => {
            const { data } = response;
            setKid(data);
        });

        promise.catch(e => {
            console.log(e);
        });

    }

    useEffect(() => {

       getPresentKidsName();

    }, []);

    return (
    
        <KidListContainer onClick={() => {navigate(`/history-kid-unique/${id}`,{state: { id: id }})}}>
            <KidPresent>{kid.name}</KidPresent>
        </KidListContainer>
    
    );

}

const KidListContainer = styled.div`

    height: 45px;
    width: 270px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid transparent;
    border-radius: 8px;

    background-color: white;

`;

const KidPresent = styled.div`

    height: fit-content;
    width: fit-content;

    display: flex;
    align-items: center;

    font-size: 15px;
    color: #123524;

`;
