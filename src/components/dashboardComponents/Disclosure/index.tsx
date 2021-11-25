import React from 'react';
import DisclosureCard from '../../Cards/DisclosureCard';
import SubTitle from '../../headings/SubTitle';
import * as S from './styles';
import { SiLinkedin, SiYoutube } from 'react-icons/si'
import  { VscGithub } from 'react-icons/vsc'

const Disclosure: React.FC = () => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <SubTitle>Spotlight</SubTitle>
      </S.TitleWrapper>

      <S.CardWrapper>
        <DisclosureCard 
          title="Dev"
          socialMedia="Linkedin"
          icon={<SiLinkedin/>}
          color="#1C528B"
          link="https://www.linkedin.com/in/walisonteodoro/"
        />
        <DisclosureCard 
          title="Dev"
          socialMedia="Github"
          icon={<VscGithub/>}
          color="#13151B"
          link="https://github.com/Wtheodoro"
        />
        <DisclosureCard 
            title="Fun"
            socialMedia="Youtube"
            icon={<SiYoutube/>}
            color="#FE5145"
            link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        />
      </S.CardWrapper>
    </S.Container>
  )
}

export default Disclosure;