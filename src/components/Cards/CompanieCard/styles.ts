import styled from 'styled-components';

export const Container = styled.div`
  width: 18rem;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #C0C0C0;
  padding-bottom: 0.5rem;

  > svg {
    font-size: 4rem;
  }
`;

export const InfoWrapper = styled.div`
  margin-left: 2rem;

  p {
    line-height: 1.7rem;
  }
`