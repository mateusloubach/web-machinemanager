import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';
import SubTitle from '../../headings/SubTitle';
import * as S from './styles';

export interface SemiCircleProps {
  inAlert?: number
  inOperation?: number
  inDowntime?: number
}

const SemiCircleChart: React.FC<SemiCircleProps> = ({ inDowntime, inAlert, inOperation }) => {

  const options = {
    chart: {
      width: 200,
      height: 200,
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      backgroundColor: '#F9F9F9'
    },
    title: {
      text: '',
      align: 'center',
      verticalAlign: 'middle',
      style: {
        fontSize: 25
      },
      y: 40
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
          distance: -5,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -140,
        endAngle: 140,
        center: ['50%', '75%'],
        size: '95%',
        y: '50%'
      }
    },

    series: [
      {
        type: 'pie',
        name: '',
        innerSize: '80%',
        data: [
          { name: 'In Operation', y: inOperation, color: '#18D217' },
          { name: 'In Alert', y: inAlert, color: '#FFC035' },
          { name: 'In Downtime', y: inDowntime, color: '#FF3440' },
        ]
      }
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          }
        }
      ]
    }
  };


  return (
    <S.Container>
      <SubTitle>Assets Statistics</SubTitle>

      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
        <S.Info>
          <h2>Status</h2>
          <S.P className="operation" color="#18d217">{inOperation} In Operation</S.P>
          <S.P className="alert" color="#FFC035">{inAlert} In Alert</S.P>
          <S.P className="downtime" color="#FF3440">{inDowntime} In Downtime</S.P>
        </S.Info>
      </div>
    </S.Container>
  )
}

export default SemiCircleChart;