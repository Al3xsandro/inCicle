import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;

    .section_post {
        display: flex;
        flex-direction: column;

        padding: 1.2rem;
        margin: 1.5rem;

        width: 41rem;
        height: 16rem;

        background: var(--light);

        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);

        border-radius: 1rem;

        .section_social_profile {
            display: flex;

            .social_logo {
                margin: 1rem;
                width: 4rem;
                height: 4rem;

                object-fit: cover;
                clip-path: circle();
            }
             .social_name {
                font-family: Roboto, sans-serif;
                color: var(--banner);
                font-weight: bold;
                
                margin-top: 2rem;
            }

            .social_post_details {
                display: flex;
                margin-top: 3.3rem;
                margin-left: -3.3rem;

                .social_date {
                    font-family: Roboto, sans-serif;
                    opacity: 0.7;
                }

                .social_privacy {
                    font-family: Roboto, sans-serif;
                    opacity: 0.7;
                    margin-left: 1rem;
                }
            }
        }

        .social_post_content {
            padding: 0.5rem;
            font-size: 1rem;
            font-family: Roboto, sans-serif;
            opacity: 0.6;
        }

        .section_actions_details {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem;

            font-size: 0.9rem;

            .action_first_like {
                font-family: Roboto, sans-serif;
                opacity: 0.7;
            }

            .action_commits {
                margin-left: 15.5rem;
                font-family: Roboto, sans-serif;
                opacity: 0.7;
            }

            .action_shared {
                font-family: Roboto, sans-serif;
                opacity: 0.7;
            }
        }

        .feed_social_action {
            display: flex;
            justify-content: space-between;

            .button {
                font-family: Roboto, sans-serif;
                padding: 1rem;
                width: 13rem;
                border: none;
                background: var(--background);
                border-radius: 1rem;

                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .section_post {
            width: 23rem;
            height: 21rem;

            margin: 1.5rem;

            .social_post_details {
                .social_privacy {
                    margin-top: 0rem;
                }
            }

            .section_actions_details {
                font-size: 0.8rem;

                .action_commits {
                    margin-left: 1rem;
                }
            }

            .feed_social_action {
                .button {
                    margin: 1rem;
                    padding: 0.4rem 0.4rem 0.2rem;
                }
            }
        }
    }
`;