import styled from 'styled-components';

export const Container = styled.div`
  width: 12rem;
  height: 4rem;
  padding: 1rem;
  border: 1px solid #DCDCDC;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  padding: 0.2rem;
  border: 3px solid #000;
  border-radius: 50%;
  > svg {
    font-size: 2rem;
  }
`

export const InfoWrapper = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-bottom: 0.5rem;
  }
`
