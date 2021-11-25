import React from 'react';
import { Container } from './styles';
import { AiOutlineSearch } from 'react-icons/ai'

const InputSearch: React.FC = () => {
  return (
    <Container className="inputSearch">
      <input type="text" placeholder="Search"/>
      <AiOutlineSearch />
    </Container>
  )
}

export default InputSearch;