import React from 'react';
import * as S from './styles';

interface LittleInfoCardProps {
  icon: React.ReactNode
  title: string
  value: string | number
}

const LittleInfoCard: React.FC<LittleInfoCardProps> = ({ icon, title, value}) => {
  return (
    <S.Container>
      <S.IconWrapper>
        {icon}
      </S.IconWrapper>
      <S.InfoWrapper>
        <p>{title}</p>
        <strong>{value}</strong>
      </S.InfoWrapper>
    </S.Container>
  )
}

export default LittleInfoCard;