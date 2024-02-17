import styled from 'styled-components';

export const Container = styled.button`
    border: none;

    font-size: 16px;

    background: none;
    color: ${({ theme, $isactive }) => $isactive ?
        theme.COLORS.ORANGE :
        theme.COLORS.GRAY_100};
`;
