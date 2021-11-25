import React from 'react';
import SubTitle from '../../headings/SubTitle';
import * as S from './styles';

const TheCrew: React.FC = () => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <SubTitle>New Join Members</SubTitle>
      </S.TitleWrapper>

      <S.TrackWrapper>
        <S.Track>
          <img src="/images/GriffRichards.jpeg" alt="Griff Richards" />
          <p><strong>Griff</strong><br/>Richards</p>
        </S.Track>

        <S.Track>
          <img src="/images/SaraCabrera.jpeg" alt="Sara Cabrera" />
          <p><strong>Sara</strong><br/>Cabrera</p>
        </S.Track>

        <S.Track>
          <img src="/images/ShaeLe.jpeg" alt="Shae Le" />
          <p><strong>Shae</strong><br/>Le</p>
        </S.Track>

        <S.Track>
          <img src="/images/BillMahoney.jpeg" alt="Bill Mahoney" />
          <p><strong>Bill</strong><br/>Mahoney</p>
        </S.Track>
      </S.TrackWrapper>
      
      
    </S.Container>
  )
}

export default TheCrew;