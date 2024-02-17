import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;

    padding: 22px;
    border: none;
    margin-bottom: 16px;

    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > h1 {
        flex: 1;

        text-align: left;
        font-weight: 700;
        font-size: 24px;

        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > footer {
        display: flex;
        width: 100%;
        margin-top: 24px;
    }
`;
