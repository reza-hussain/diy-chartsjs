import React, { useState, useEffect } from 'react'
import {useRouter} from "next/router"

const chartBuilder = () => {
  const router = useRouter()
  return (
    <div className="w-full flex justify-center items-center h-screen gap-5">
        <button onClick={() => router.push('/chartBuilder/barChart')}>Bar Chart</button>
        <button>Line Chart</button>
        <button>Pie Chart</button>
    </div>
  )
}

export default chartBuilder