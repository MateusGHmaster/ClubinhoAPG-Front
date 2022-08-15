import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import UniquePresentDay from './UniquePresentDay';

export default function HistoryByKidUnique () {

    const location = useLocation();
    const { id } = location.state;

    const [presenceList, setPresenceList] = useState([]);

    function getPresenceListByKidId () {

        const promise = axios.get(`http://localhost:5000/kid-history/${id}`);

        promise.then(response => {
            const { data } = response;
            setPresenceList(data);
            console.log(data)
        });

        promise.catch(e => {
            console.log(e);
        });

    }

    function showDaysPresenceList () {

        if(presenceList.length > 0) {
            return presenceList.map(list => {
                const { date } = list;
                return (
                    <>
                        <UniquePresentDay date={date} />
                    </>
                );
            });
        }

    } 

    useEffect(() => {

        getPresenceListByKidId();

    }, []);

    return (
    
        <HistoryContainer>
            <Title>Dias presentes</Title>
            <List>{showDaysPresenceList()}</List>
        </HistoryContainer>
    
    );

}

const HistoryContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const Title = styled.p`

    position: fixed;
    top: -20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-weight: bold;
    color: #123524;

    width: 300px;
    height: 100px;

    background-color: #7cd756;

`;

const List = styled.div`

    margin-top: 92px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 5px;

`;