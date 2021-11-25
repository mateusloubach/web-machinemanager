import React from 'react';
import * as S from './styles';

interface ProgressBarProps {
  title: string
  unit?: string
  goal: number
  current: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, unit, goal, current }) => {

  const currentPercent = (goal: number, current: number) => {
    const percent = (current/goal)*100
    return `${percent}%`
  }

  return (
    <S.Container>
      <S.Info>
        <span>{title}</span>
        <span>{unit} {current} / {goal}</span>
      </S.Info>

      <S.Goal>
        <S.Current current={currentPercent(goal, current)}/>
      </S.Goal>

    </S.Container>
  )
}

export default ProgressBar;