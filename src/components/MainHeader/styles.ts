import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MainHeader;  
  width: 100%;
  height: 6rem;
  background: #f9f9f9;
  background-image: url("./images/bg.jpg");
  background-size: cover;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  position: relative;

  .inputSearch {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 768px) {
    .inputSearch {
      left: 45%;
    }

    .menu-icon {
      height: 6rem;
      width: 5rem;
      position: relative;
      background: linear-gradient(to right, transparent, black);

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        color: #FFF;
      }
    }
  }
`;
