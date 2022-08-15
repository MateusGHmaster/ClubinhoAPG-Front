import backArrow from '../../assets/back.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function BackArrow () {

    const navigate = useNavigate();

    return (

        <Back src={backArrow} alt={'return'} onClick={() => {navigate('/home')}}/>

    );

}

const Back = styled.img`

    position: absolute;

    height: 20px;
    width: 30px;

    margin-right: 330px;
    margin-bottom: 200px;

`;