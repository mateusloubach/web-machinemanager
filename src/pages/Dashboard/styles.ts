import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  height: 100%;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  > div {
    margin-top: 1rem;
    width: 45%;
    
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .little-cards {
    margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    > div {
      margin-top: 1rem;
    }
  }
`;