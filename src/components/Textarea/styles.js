import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 150px;
    resize: none;

    margin-bottom: 8px;
    padding: 16px;

    border: none;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;
