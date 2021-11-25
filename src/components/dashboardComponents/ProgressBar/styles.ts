import styled from 'styled-components';

export const Container = styled.div`
  /* width: 30rem; */
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`
export const Goal = styled.div`
  width: 100%;
  height: 0.7rem;
  border-radius: 20px;
  background-color: #DCDCDC;
`

interface CurrentProps {
  current: string
}

export const Current = styled.div<CurrentProps>`
  width: ${props => props.current};
  height: 0.7rem;
  border-radius: 20px;
  background-color: #1D518A;
`
