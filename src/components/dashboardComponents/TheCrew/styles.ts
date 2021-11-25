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

export const Track = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    margin-top: 1rem;
  }

  p + p {
    margin-top: 0;
  }

  > img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
`;

export const TrackWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
