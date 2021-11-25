import React from 'react';
import { AssetType } from '../../../store/ducks/assets/types';
import { AiOutlineEdit } from 'react-icons/ai'
import * as S from './styles';

const AssetCard: React.FC<AssetType> = ({ image, model, name,  sensors, status, healthscore, specifications, metrics, responsible}) => {

  const hourToMonth = (time: number) => {
    const months = time/(24*30)
    return `${Math.round(months)} month${months <= 1 ? '' : 's'} ago`
  }

  const dateFormat = (date: string) => {

    const monthsName = [
      'jan', 'feb', 'mar', 'apr', 'may', 'june',
      'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
    ]

    const ISOdate = new Date(date)
    return `${ISOdate.getDate()} ${monthsName[ISOdate.getMonth()]} at ${ISOdate.getHours()}:${ISOdate.getMinutes()}`
  }

  const statFormat = (status: string) => {
    return status
      // insert space before caps
      .replace(/([A-Z])/g, ' $1')
      // uppercase the first char
      .replace(/^./, (str) => str.toUpperCase())
  }

  return (
    <S.Container>
      <S.Top>
        <h2>{name}</h2>
        <AiOutlineEdit />
      </S.Top>

      <S.Info>
        <S.ImageWrapper>
          <img src={image} alt={model} />
        </S.ImageWrapper>

        <S.InfoWrapper>
          <p><strong>Status:</strong> {statFormat(status)}</p>
          <p><strong>Start date:</strong> {hourToMonth(metrics.totalUptime)}</p>
          <p><strong>Model:</strong> {model}</p>
          <p><strong>Sensor ID:</strong> {sensors}</p>
          <p><strong>Last update:</strong> {dateFormat(metrics.lastUptimeAt)}</p>
          <p><strong>Responsile:</strong> {responsible ? responsible : 'none'}</p>
        </S.InfoWrapper>
      </S.Info>
    </S.Container>
  )
}

export default AssetCard;