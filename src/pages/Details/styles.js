import styled from "styled-components";

export const Container = styled.div`
    display: grid;

    grid-template-rows:
    105px 
    auto;

    grid-template-areas:
    "header" 
    "content";

    width: 100%;
    height: 100vh;

    > main {
        grid-area: content;
        padding: 64px 0;
        overflow-y: auto;
    }
`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;

        a {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 550px;

    margin: 0 auto;

    > button:first-child {
        align-self: end;
    }

    > h1 {
        padding-top: 64px;
        font-size: 36px;
        font-weight: 500;
    }

    > p {
        margin-top: 16px;
        font-size: 16px;
        text-align: justify;
    }
`;
