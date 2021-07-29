import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    height: 100vh;

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
    }
`;

export const Aside = styled.aside`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    padding: 2rem 0 8rem;
    
    margin: 0 auto;
    background: var(--home-page-color);
    width: 100%;

    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
    
    .image {
        width: 30rem;
    }

    @media(max-width: 768px){
        display: none;
    }
`;

export const Main = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    margin: 0 auto;

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 3rem 4rem 7rem;

        height: 30rem;
        width: 30rem;

        background: var(--light);
        border-radius: 1rem;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);

        .title {
            font-family: Roboto, sans-serif;
            margin: 1rem;
            color: var(--blue);
            opacity: 0.8;
        }

        .content_form {
            display: flex;
            flex-direction: column;

            input {
                background: transparent;
                
                max-width: 20rem;
                min-height: 0.4rem;

                border-radius: 4px;
                border: 1px solid #ccc;
                outline: none;

                padding: 1rem;
            }
            
            .button {
                display: flex;
                align-items: center;
                justify-content: center;
                
                border: 0;
                border-radius: 5px;
                padding: 1rem;

                text-decoration: none;

                font-family: Roboto, sans-serif;

                color: var(--light);
                background: var(--blue);
                opacity: 0.7;

                &:hover {
                    opacity: 0.6;
                }
            }
        }
    }

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;

        padding: 3rem;
    
        .content {
            height: 20rem;
            width: 20rem;
        }
    }
`;