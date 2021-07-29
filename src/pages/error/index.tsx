import { Container } from "./style";

export function NotFound() {
    return (
        <>
            <Container>
                <div className="box">
                    <img className="error" src="/img/404.svg" alt="error 404" />
                    <a className="button" href="/">Voltar ao inicio</a>
                </div>
            </Container>
        </>
    );
};