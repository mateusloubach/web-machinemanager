import React from 'react';
import  { FaUserTie } from 'react-icons/fa'
import useNameCompany from '../../../hooks/findNameHelper/nameCompany';
import useNameUnit from '../../../hooks/findNameHelper/nameUnit';
import { UserType } from '../../../store/ducks/users/types';
import * as S from './styles';

const CompanieCard: React.FC<UserType> = ({ id, name, email, unitId, companyId }) => {

  const companyName = useNameCompany(companyId)
  const unitName = useNameUnit(unitId)

  return (
    <S.Container>
      <FaUserTie />
      <S.InfoWrapper>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Unit:</strong> {unitName}</p>
        <p><strong>Company:</strong> {companyName}</p>
      </S.InfoWrapper>
    </S.Container>
  )
}

export default CompanieCard;
