import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import UniqueKid from '../History/UniqueKid';

export default function HistoryByKid () {

    const [kids, setKids] = useState ([]);

    function getKidsList () {

        const promise = axios.get('http://localhost:5000/kids');
        promise.then (response => {
            const {data} = response;
            setKids(data);
        })
        promise.catch (e => {
            console.log(e);
        });

    }

    function showKidsList () {

        if(kids.length > 0) {
            return kids.map(kid => {
                const { id } = kid;
                return (
                    <>
                        <UniqueKid id={id} />
                    </>
                );
            });
        }

    }

    useEffect(() => {

        getKidsList();

    }, []);

    if (showKidsList !== null) {
        return (
        
            <PresenceBody>
                <Title>Histórico de Presença</Title>
                <KidsList>
                    {showKidsList()}
                </KidsList>
            </PresenceBody>

        );
    }else {
        return (
            <>Loading...</>
        )
    }

}

const PresenceBody = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

`;

const KidsList = styled.div`

    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 5px;

`;

const Title = styled.div`

    margin-top: 60px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;

    color: #123524;  

`;