import React from 'react';
import  { FaRegBuilding } from 'react-icons/fa'
import useNameCompany from '../../../hooks/findNameHelper/nameCompany';
import { UnitType } from '../../../store/ducks/units/types';
import * as S from './styles';

const UnitCard: React.FC<UnitType> = ({ id, name, companyId}) => {

  const companyName = useNameCompany(companyId)

  return (
    <S.Container>
      <FaRegBuilding />
      <S.InfoWrapper>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Company:</strong> {companyName}</p>
      </S.InfoWrapper>
    </S.Container>
  )
}

export default UnitCard;
