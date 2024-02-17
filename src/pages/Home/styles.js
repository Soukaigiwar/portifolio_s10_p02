import { Link } from "react-router-dom";
import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
    display: flex;
    grid-area: brand;
    justify-content:center;

    align-items: center;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;

export const Menu = styled.ul`
    grid-area: menu;

    padding-top: 64px;
    text-align: center;

    background-color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.ORANGE : theme.COLORS.BACKGROUND_900};

    > li {
        margin-bottom: 24px;
    }
`;

export const Search = styled.div`
    grid-area: search;
    padding: 64px 64px 0;
`;

export const Content = styled.div`
    grid-area: content;
    padding: 0 64px;
    overflow-y: auto;
`;

export const NewNote = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: newnote;

    border: none;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > svg {
        margin-right: 8px;
    }
`;
