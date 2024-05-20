"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { chartSampleData } from '@/constants';

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ({accounts}: DoughnutChartProps ) => {

    const data = chartSampleData
  return (
    <Doughnut data={data} 
    options={{
        animation:true, 
        responsive: true, 
        maintainAspectRatio: true, 
        cutout: '50%', 
        plugins: {
            legend: {display: false}
        }
    }} />
  )
}

export default DoughnutChart