import React from 'react';
import * as S from './styles';

interface DisclousureCardProps {
  title: string
  socialMedia: string
  icon: React.ReactNode
  color?: string
  link?: string
}

const DisclosureCard: React.FC<DisclousureCardProps> = ({ title, socialMedia, icon, color, link }) => {

  return (
    <S.Container color={color}>
      <a href={link} target="_blank" rel="noreferrer">
        <S.Title>{title}</S.Title>
        <S.Social>
          {icon}
          <p>{socialMedia}</p>
        </S.Social>
      </a>
    </S.Container>
  )
}

export default DisclosureCard;