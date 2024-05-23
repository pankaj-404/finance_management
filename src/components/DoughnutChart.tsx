"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { chartData } from '@/constants';

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ({accounts}: DoughnutChartProps ) => {
  const accountNames: string[] = []
  const balances: number[] = []
  

  accounts.forEach(account => {
    accountNames.push(account.name)
    balances.push(account.currentBalance)
  })

  const data = {
  labels: accountNames,
  datasets: [
    {
      label: "Banks",
      data: balances,
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      // borderWidth: 1,
      // tension: 0.5,
    },
  ],
}
  // const data = chartSampleData
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