import styled from 'styled-components';

export default function UniquePresentDay ({ date }) {

    return (
   
        <PresentDay>{date}</PresentDay>

    );

}

const PresentDay = styled.div`

    height: 45px;
    width: 270px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    border: 1px solid transparent;
    border-radius: 8px;

    background-color: white;

`;