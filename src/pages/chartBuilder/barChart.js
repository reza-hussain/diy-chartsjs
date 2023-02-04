import BarChart from "@/components/ChartPreview/BarChart"
import BarConfig from "@/components/Config/BarConfig"
import Layout from "@/components/Layout"
import React from 'react'

const barChart = () => {
  
  return (
    <Layout>
        <div className="w-full flex justify-center items-center">
            <div className="w-[70%] p-5">
                <BarChart />
            </div>
            <div className="w-[30%] p-5">
                <BarConfig />
            </div>
        </div>
    </Layout>
  )
}

export default barChart