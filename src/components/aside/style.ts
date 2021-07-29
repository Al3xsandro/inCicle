import styled from 'styled-components';

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    
    margin: 1rem;

    .content_box {
        display: flex;
        flex-direction: column;

        padding: 1rem;
        margin: 1rem;

        width: 20rem;
        height: 5rem;

        background: var(--light);

        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);

        border-radius: 1rem;

        .title {
            text-align: center;
            padding: 1rem;
            font-family: Roboto, sans-serif;
            font-size: 1.3rem;

            color: var(--banner);
        }
    }

    .date_title {
        font-family: Roboto, sans-serif;
        color: var(--title);
        font-weight: bold;
        opacity: 0.6;
        margin-left: 1.2rem;
    }

    .message_box {
        display: flex;
        flex-direction: column;

        padding: 1rem;
        margin: 1rem;

        width: 20rem;
        height: 6rem;

        background: var(--light);

        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);

        border-radius: 1rem;

        .title {
            text-align: center;
            padding: 1rem;
            font-family: Roboto, sans-serif;
            font-size: 1rem;

            opacity: 0.6;

            color: var(--title);
        }
    }

    @media(max-width: 968px){
        display: none;
    }
`;