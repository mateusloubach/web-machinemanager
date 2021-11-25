import styled from 'styled-components';

// Desktop Menu
export const ColumnMenu = styled.div`
  grid-area: Menu;
  height: 93vh;
  width: 16rem;
  border-radius: 15px;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0 14px 28px -30px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.18);
  z-index: 1;

  a {
    text-decoration: none;
    color: #4F4F4F;
  }

  span,
  strong {
    color: #1C528B;
  }

  h3 {
    margin-top: 2rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  > img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  > p {
    text-align: center;
    line-height: 24px;
  }

  strong {
    color: #1C528B;
  }
`

// Mobile Menu
interface FullMenuProps {
  isOpen: boolean
}

export const FullMenu = styled.div<FullMenuProps>`
  display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFF;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${props => props.isOpen ? 1 : 0};
    pointer-events: ${props => props.isOpen ? 'all' : 'none'};
    z-index: 1; 
`

export const CloseMenuWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  svg {
    font-size: 1.5rem;
  }
`