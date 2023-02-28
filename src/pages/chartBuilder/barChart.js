import BarChart from "@/components/ChartPreview/BarChart"
import BarConfig from "@/components/Config/BarConfig/BarConfig"
import Layout from "@/components/Layout"
import React from 'react'

const barChart = () => {
  
  
  return (
    <Layout>
        <div className="w-full flex justify-center items-center bg-myGray-light relative overflow-hidden">
            <div className="w-full p-5">
                <BarChart />
            </div>
            <div className="min-w-[25%] max-w-[25%] p-5 bg-blue min-h-screen bg-white">
                <BarConfig />
            </div>
        </div>
    </Layout>
  )
}

export default barChart