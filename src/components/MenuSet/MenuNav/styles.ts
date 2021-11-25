import styled from 'styled-components';

export const Navigation = styled.nav`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: #4F4F4F;
  }

  a + a {
    margin-top: 2rem;
  }

  svg {
    margin-right: 1rem;
  }

  .selected {
    color: #1C528B;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
  }

`
export const SignOutWrapper = styled.div`
  position: absolute;
  bottom: 2rem  ; 

  a {
    text-decoration: none;
    color: #4F4F4F;
  }

  .selected {
    color: #000;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`