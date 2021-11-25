import styled from 'styled-components';

export const Container = styled.div`
  width: max(25%, 15rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
  padding: 0.5rem 1rem;
  border-radius: 25px;

  > svg {
    color: #696969;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
