import styled from 'styled-components';

export const Container = styled.div`
  height: 75vh;
  width: 18rem;
  border-radius: 15px;
  background-color: #FFF;
  box-shadow: 0 14px 28px -30px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.18);
  padding: 1rem 0;

  @media (max-width: 768px) {
    height: 15rem;
    width: 90%;
  }
`;
