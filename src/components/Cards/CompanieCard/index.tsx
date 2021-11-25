import React from 'react';
import  { BsBuilding } from 'react-icons/bs'
import { CompanieType } from '../../../store/ducks/companies/types';
import * as S from './styles';

const CompanieCard: React.FC<CompanieType> = ({ id, name }) => {
  return (
    <S.Container>
      <BsBuilding />
      <S.InfoWrapper>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Name:</strong> {name}</p>
      </S.InfoWrapper>
    </S.Container>
  )
}

export default CompanieCard;
