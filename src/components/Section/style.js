import styled from 'styled-components';

export const Container = styled.section`
    margin: 28px 0;

    > h2 {
        margin-bottom: 28px;
        padding-bottom: 16px;

        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

        font-size: 20px;
        font-weight: 400;

        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;
