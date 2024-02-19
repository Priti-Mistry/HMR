import React from 'react'
import {PolarArea,Pie} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function PieChart({chartData}) {
    return <>
    <Pie 
    data={chartData}
  />
    {/* <PolarArea 
    data={chartData}
  /> */}
    </>
}

export default PieChart