
import React from 'react';
import { Container } from './styles';

interface RotatingTextProps {
  items: string[]
}
const RotatingText: React.FC<RotatingTextProps> = ({ items }) => {
  let ReactRotatingText = require('react-rotating-text');
  return (
    <Container>
      <ReactRotatingText items={[...items]} />
    </Container>
  )
}

export default RotatingText;