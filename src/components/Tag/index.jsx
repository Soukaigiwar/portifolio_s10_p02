import { Container } from "./styles";

export function Tag({ title = "title", ...rest }) {
    return (
        <Container {...rest}>
            {title}
        </Container>
    );
};
