import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown'

drilldown(Highcharts);

interface ChartSize {
  width: number | string
  height: number | string
}

interface BarChartProps {
  inAlert?: number
  inOperation?: number
  inDowntime?: number
}
const BarChart: React.FC<BarChartProps> = ({ inDowntime = 0, inAlert = 0, inOperation = 0}) => {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth)
  const [chartSize, setChartSize] = useState<ChartSize>()

  useEffect(() => {
    if (screenSize <= 768) {
      setChartSize({
        width: screenSize - 30,
        height: 200
      })
    } else {
      setChartSize({
        width: 270,
        height: ''
      })
    }
  }, [screenSize])

  window.addEventListener('resize', () => {
    setScreenSize(window.innerWidth)
  })

  const options = {
    chart: {
      type: 'column',
      ...chartSize
    },
    title: {
      text: 'Status'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    legend: {
      enabled: false
    },
    series: [
      {
        name: 'Assets',
        colorByPoint: true,
        data: [
          {
            name: 'Alert',
            y: inAlert,
            drilldown: 'inAlert'
          },
          {
            name: 'Operating',
            y: inOperation,
            drilldown: 'inOperation'
          },
          {
            name: 'Downtime',
            y: inDowntime,
            drilldown: 'inDowntime'
          }
        ]
      }
    ],
    drilldown: {
      series: [
        {
          id: 'inAlert',
          data: [['Motor H13D', 1], ['Ventilador serie D', 4]]
        },
        {
          id: 'inOperation',
          data: [['Motor H13D', 2], ['Ventilador serie D', 1]]
        },
        {
          id: 'inDowntime',
          data: [['Motor H13D', 1], ['Ventilador serie D', 1]]
        }
      ]
    },
  }

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}

export default BarChart