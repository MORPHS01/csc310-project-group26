"use client"
import React from 'react'
import { useState } from 'react';

function Crime() {
  const [data, setData] = useState([])

  async function checkData(feature: string) {
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBxdeT132DoZ4r_EfH0Bu3VXx0vTk63vBM&cx=9761500df74d5452d&q=crime-reporting-systems-${feature}`)
    const data = await response.json()
    console.log(data.items)
    setData(data.items);
  }


  return (
    <div>
      <p className="cursor-pointer" onClick={() => checkData("anonymous-tipping")}>generate data</p>
      <div>
        {data && data.map((each, i) => 
        <p key={i}>{each.title}</p>
        )}
      </div>
    </div>
  )
}

export default Crime