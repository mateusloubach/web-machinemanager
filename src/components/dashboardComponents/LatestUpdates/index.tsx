import React from 'react';
import SubTitle from '../../headings/SubTitle';
import * as S from './styles';
import { FiChevronsDown } from 'react-icons/fi'
import { GrFormNext } from 'react-icons/gr'
import { IoWarningOutline } from 'react-icons/io5'

const LatestUpdates: React.FC = () => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <SubTitle>Latest Updates</SubTitle>
      </S.TitleWrapper>

      <S.Track>
        <div className="left">
          <S.IconWrapper>
            {<FiChevronsDown />}
          </S.IconWrapper>
          <span>Downtime Detected</span>
        </div>
        <div className="right">
          16:42
          <GrFormNext />
        </div>
      </S.Track>

      <S.Track>
        <div className="left">
          <S.IconWrapper>
            {<IoWarningOutline />}
          </S.IconWrapper>
          <span>Abnormal engine vibration</span>
        </div>
        <div className="right">
          13:59
          <GrFormNext />
        </div>
      </S.Track>

      <S.Track>
        <div className="left">
          <S.IconWrapper>
            {<FiChevronsDown />}
          </S.IconWrapper>
          <span>Downtime Detected</span>
        </div>
        <div className="right">
          7:35
          <GrFormNext />
        </div>
      </S.Track>
    </S.Container>
  )
}

export default LatestUpdates;