import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  border-bottom: 1px solid #C0C0C0;
  padding-bottom: 0.8rem;
`;

export const CardWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`
