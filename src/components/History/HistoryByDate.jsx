import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Day from './Day';

export default function HistoryByDate () {

    const [dates, setDates] = useState([]);

    function getDatesHistory () {

        const promise = axios.get('http://localhost:5000/days-history');

        promise.then(response => {
            const { data } = response;
            setDates(data);
        });
        promise.catch(e => {
            console.log(e);
        });

    }

    function showDays () {

        if(dates.length > 0) {
            return dates.map(d => {
                const { date } = d;
                return (
                    <>
                        <Day date={date} />
                    </>
                );
            });
        }

    }

    useEffect(() => {

        getDatesHistory();

    }, []);

    return (
    
        <HistoryPage>
            <Title>Histórico de Dias</Title>
            <DaysList>{showDays()}</DaysList>
        </HistoryPage>
    
    );

}

const HistoryPage = styled.p`

    margin-top: -10px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    overflow-x: scroll;

`;

const Title = styled.p`

    position: fixed;
    top: -20px;

    width: 300px;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    font-weight: bold;
    font-size: 18px;
    color: #123524;

    background-color: #7cd756;

    z-index: 2;

`;

const DaysList = styled.div`

    margin-top: 105px;
    display: flex;
    flex-direction: column;
    gap: 5px;

`;