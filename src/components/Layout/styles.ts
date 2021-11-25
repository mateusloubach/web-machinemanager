import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 18rem auto;
  grid-template-rows: 6rem auto;

  grid-template-areas: 
  'MainHeader MainHeader'
  'Menu Content';

  height: 100vh;
  background-color: #F9F9F9;

  .main-menu {
    margin: -4.5rem 0 0 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 6rem auto;

    grid-template-areas: 
    'MainHeader'
    'Content';
  }

  min-width: 315px;
`;
