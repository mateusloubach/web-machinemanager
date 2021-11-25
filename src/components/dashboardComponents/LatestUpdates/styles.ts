import styled from 'styled-components';

export const Container = styled.div`
  /* width: 30rem; */
  width: 45%;

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
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;

    > span {
      margin-left: 1rem;
    }
  }

  .right {
    display: flex;
    align-items: center;

    > svg {
      font-size: 1.6rem;
    }
  }
`;

export const IconWrapper = styled.div`
  background-color: #EBEBEB;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  position: relative;

  > svg {
    font-size: 1.6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
