"use client"

import React from 'react'
import CountUp from 'react-countup'
import DoughnutChart from './DoughnutChart'
import { chartSampleData } from '@/constants'

const TotalBalanceBox = ({accounts=[],totalBanks,totalCurrentBalance}: TotalBalanceBoxProps) => {
    const counterBalance = (totalCurrentBalance - 200) || 0
    return (
    <section className="total-balance">
        <div className="total-balance-chart">
            <DoughnutChart accounts={accounts} />
        </div>
        <div className="flex flex-col gap-6">
            <h2 className="header-2">
                Bank Accounts: {totalBanks}
            </h2>
            <div className="flex flex-col gap-2">
                <p className="total-balance-label">
                    Total Current Balance
                </p>
                <p className="total-balance-amount flex-center gap-2">
                    <CountUp 
                        duration={1.5}
                        start={counterBalance > 0 ? counterBalance: 0 }
                        end={totalCurrentBalance} 
                        decimal='.' 
                        decimals={2} 
                        prefix='INR' 
                    />
                    
                </p>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox