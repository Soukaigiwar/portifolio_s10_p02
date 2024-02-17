import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    padding-right: 16px;
    margin-bottom: 8px;
    border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
    border-radius: 10px;

    background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    input {
        height: 56px;
        width: 100%;

        padding: 12px;
        border: none;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;
