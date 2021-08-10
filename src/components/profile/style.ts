import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;

    margin: 0.4rem;

    .nav_profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background: var(--light);

        border-radius: 1rem;
        
        max-height: 30rem;

        .nav_banner {
            display: flex;
            justify-content: center;
            align-items: center;
            
            width: 100%;
            height: 13rem;

            background: var(--banner);

            border-radius: 1rem;
            
            position: relative;

            .nav_logo {
                display: flex;
                justify-content: center;

                position: relative;
                top: 4.3rem;

                z-index: 1;
                width: 8rem;
                height: 8rem;

                object-fit: cover;
                clip-path: circle();
            }
        }

        .nav_profile_info {
            display: flex;
            flex-direction: column;
            justify-content: center;

            margin: 1rem;

            .nav_title {
                font-family: Roboto, sans-serif;
                color: var(--banner);
            }

            .nav_social {
                text-align: center;
                margin: 0.3rem;

                font-family: Roboto, sans-serif;
                font-weight: bold;
                color: var(--social);
            }
            
            .nav_job {
                text-align: center;
                color: var(--social);

                font-family: Roboto, sans-serif;
            }
        }

        .nav_profile_description {
            display: flex;
            flex-direction: column;

            padding: 1rem;

            .nav_city {
                text-align: center;
                color: var(--social);

                font-family: Roboto, sans-serif;

                margin-right: 3rem;
            }

            .nav_company {
                text-align: center;
                color: var(--social);

                font-family: Roboto, sans-serif;

                margin-right: 10.5rem;
                margin-top: 1rem;
            }

            .nav_graduation {
                text-align: center;
                color: var(--social);

                font-family: Roboto, sans-serif;

                margin-top: -1.1rem;
                margin-left: 3.4rem;
            }
        }
    }

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        width: 100vh;
        margin: 0;

        .nav_profile {
            display: flex;

            width: 100vh;
            margin: 0;
        }
    }
`;
