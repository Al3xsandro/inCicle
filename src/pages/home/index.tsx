import { 
    Container,
    Aside,
    Main
} from "./style";

export function Home() {
    return (
        <>
            <Container>
                <Aside>
                    <img className="image" src="/img/work.svg" alt="incicle homepage" />
                </Aside>
                <Main>
                    <div className="content">
                        <h2 className="title">InCicle</h2>
                        <form className="content_form">
                            <label> 
                                <input type="text" placeholder="E-mail.." />
                            </label>
                            <br/>
                            <label>
                                <input type="text" placeholder="Password.." />
                            </label>
                            <br/>
                            <a href="/dashboard" className="button">Sign In</a>
                        </form>
                    </div>
                </Main>
            </Container>
        </>
    );
};