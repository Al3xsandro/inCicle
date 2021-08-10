import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 100%;

        overflow: hidden;
    }
`;