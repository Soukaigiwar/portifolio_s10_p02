import styled from 'styled-components';
import backgroundImg from '../../assets/Background.png';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: stretch;
`;

export const Form = styled.form`
    display: flex;
    padding: 0 136px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > h2 {
        margin: 48px 0;
        font-size: 24px;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > a {
        margin-top: 124px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    filter: brightness(0.4);
`;
