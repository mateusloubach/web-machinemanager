import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;

  > div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  height: 10rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface PProps {
  color: string
}

export const P = styled.p<PProps>`
  position: relative;

  &::before {
    position: absolute;
    left: 0;
    bottom: -0.4rem;
    content: '';
    width: 2rem;
    height: 3px;
    background-color: ${props => props.color};
  }

`
