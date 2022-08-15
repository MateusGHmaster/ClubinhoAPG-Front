import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import UniquePresentKid from './UniquePresentKid';

export default function HistoryByDateUnique () {

    const location = useLocation();
    const { date } = location.state;

    const [kidsList, setKidsList] = useState([]);

    function getKidsPresenceListByDate () {

        const promise = axios.get(`http://localhost:5000/date-history/${date}`);

        promise.then(response => {
            const { data } = response;
            setKidsList(data);
        });
        promise.catch(e => {
            console.log(e);
        });

    }

    function showKidsPresenceList () {

        if(kidsList.length > 0) {
            return kidsList.map(kidList => {
                const { kidId } = kidList;
                return (
                    <>
                        <UniquePresentKid kidId={kidId} />
                    </>
                );
            });
        }

    }

    useEffect(() => {

        getKidsPresenceListByDate();

    }, []);

    return (
    
        <HistoryPage>
            <Title>Histórico de presenças do dia {date}</Title>
            <List>{showKidsPresenceList()}</List>
        </HistoryPage>
    
    );

}

const HistoryPage = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const Title = styled.p`

    position: fixed;
    top: -19px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 370px;
    height: 90px;

    font-size: 18px;
    font-weight: bold;
    color: #123524;

    background-color: #7cd756;

`;

const List = styled.div`

    margin-top: 82px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 5px;

`;

