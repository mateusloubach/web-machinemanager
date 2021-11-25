import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  > h1 {
    margin-bottom: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  
  .cards {
    display: flex;
    flex-wrap: wrap;
    width: fit-content;

    > div {
      margin-bottom: 1rem;
      margin-right: 1rem;
    }
  }

  .board {
    position: sticky;
    top: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    .board {
      position: initial;
    }
  }
`;
