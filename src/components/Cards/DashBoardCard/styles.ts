import styled from 'styled-components';

export const Container = styled.div`
  width: 45%;
  height: 15rem;
  background-color: #FFF;
  border-radius: 20px;
  box-shadow: 0px 51px 90px -30px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;

  h3 {
    margin-top: 4rem;
    text-align: center;

    strong {
      color: #1C528B;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
