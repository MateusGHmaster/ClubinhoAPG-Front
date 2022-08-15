import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Day ({ date }) {

    const navigate = useNavigate();

    return (
    
        <DayContainer onClick={() => {navigate(`/history-date-unique/${date}`,{state: { date: date }})}}>
            <Date>{date}</Date>
        </DayContainer>
    
    );

}

const DayContainer = styled.div`

    height: 45px;
    width: 150px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid transparent;
    border-radius: 8px;

    background-color: white;

`;

const Date = styled.div`

    height: fit-content;
    width: fit-content;

    display: flex;
    align-items: center;

    font-size: 15px;
    color: #123524;

`;
