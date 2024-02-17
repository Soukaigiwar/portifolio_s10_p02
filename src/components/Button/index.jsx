import { Container } from "./styles";

export function Button({ title = 'Título', loading = false, ...rest }) {
    return (
        <Container
            type='button'
            disabled={loading}
            {...rest}
        >
            {loading ? 'Carregando...' : title}
        </Container>
    );
};
