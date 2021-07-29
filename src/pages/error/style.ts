import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;

    background: var(--light);

    padding: 6rem;
    margin: 1.5rem;

    border-radius: 1rem;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);

    .error {
      width: 26rem;
      height: 17rem;
    }
  
    .button {
      text-align: center;
      margin: 1.5rem;
      background: var(--blue);
      opacity: 0.7;
      padding: 1rem;
      text-decoration: none;

      width: 10rem;

      outline: none;
      border-radius: 0.25rem;
      font-family: sans-serif;

      color: var(--light);
      
      &:hover{
          opacity: 0.7;
      }
    }

    @media(max-width: 768px){
      width: 23rem;

      .error {
          width: 20rem;
      }
    }
  }
`;