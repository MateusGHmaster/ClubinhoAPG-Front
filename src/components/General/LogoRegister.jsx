import logo from '../../assets/logo.png';
import styled from 'styled-components';

export default function Logo () {

    return (

        <LoginLogo >
            <img src={logo} alt={'login-logo'} height={200} width={350} />
        </LoginLogo >

    );

} 

const LoginLogo = styled.div`

    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    z-index: 1;

`;