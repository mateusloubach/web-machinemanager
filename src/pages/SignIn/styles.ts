import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  background-image: url("./images/bg.jpg");
  background-position-x: calc(100vw/2);
  background-position-y: 50%;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-position: center;
  }
`;

export const LeftSide = styled.div`
  width: max(400px, 30%);
  height: 35rem;
  background-color: #FFF;
  border-radius: 20px 0 0 20px;
  padding: 0 3rem;
  text-align: start;
  display: flex;
  flex-direction: column;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.18);

  > h1 {
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.2rem;

    > span {
      color: #1C528B;
    }
  }

  > form {
    padding-top: 1.8rem;
    display: flex;
    flex-direction: column;

    > label {
      margin: 1rem 0 0.5rem;
    }

    > span {
      color: red;
    }

    > button {
      margin-top: 2rem;
    }
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > a {
    color: #1C528B;
  }

  .buttons {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
    border-radius: 20px;
    margin: 2rem;
  }
`
export const RightSide = styled.div`
  height: 35rem;
  width: max(400px, 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 8px solid #FFF;
  border-right: 8px solid #FFF;
  border-bottom: 8px solid #FFF;
  border-radius: 0 20px 20px 0;

  @media (max-width: 768px) {
    display: none;
  }
`

export const RotatingWrapper = styled.div`
  width: 20rem;
  padding: 1rem;
  background: #FFF;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  text-align: center;
  
  > span {
    font-size: 2rem;
  }
`
