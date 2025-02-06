/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';

type Car = {
  id: string;
  make: string;
  model: string;
  latitude: number;
  longitude: number;
  time: string;
}[]

function Fleet() {
  const groupName = "GROUP 26 PROJECT";
  const carFleet = [
    {id: "CF001", make: "Toyota", model: "Corolla"},
    {id: "CF002", make: "Ford", model: "Mustang"},
    {id: "CF003", make: "Honda", model: "Accord"},
    {id: "CF004", make: "Hyundai", model: "Sonata"},
    {id: "CF005", make: "Tesla", model: "Model Y"},
  ]
  
  const [fleetHistory, setFleetHistory] = useState<Car[]>([])

  function trackFleet(){
    const newLogs: Car = carFleet.map((car) => ({
      id: car.id,
      make: car.make,
      model: car.model,
      latitude: Math.random() * (6.52 - 6.51) + 6.51,
      longitude: Math.random() * (3.39 - 3.35) + 3.35,
      time: new Date().toLocaleTimeString()
    }));

    setFleetHistory((prev) => [ newLogs, ...prev ])
  }


  return (
    <main className="px-10 py-5">
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl">{groupName}</p>
        <Link href="/#gsc.tab=0" onClick={() => setTimeout(() => window.location.reload(), 170)}><button className="hover:bg-red-800 bg-red-500 text-white text-base px-5 py-3 rounded-lg transition-all">Search Engine Results Page</button></Link>
      </div>

      <header className="flex gap-5 items-center mt-4">
        <p className="text-2xl text-black font-bold">Fleet Tracking App</p>
        <button onClick={trackFleet} className="bg-cyan-800 hover:bg-cyan-500 text-white text-base px-5 py-3 rounded-lg transition-all">Track Fleet</button>
      </header>

      <aside className="mt-10 mb-5 px-3 w-full">
        {fleetHistory.map((carLogs, index) => (
          <div key={index} className="my-8">
            <section>
              {carLogs.slice(0, 1).map((car, i) => 
                <p key={i} className="text-[#1D1F26] text-xl font-bold">Tracked at {car.time}</p>
              )}
            </section>
            <article>
              {carLogs.map((car, i) =>
                <section key={i} className="flex gap-14 py-1.5 px-5 odd:bg-blue-50 even:bg-purple-50">
                  <p className="text-[#1D1F26] text-lg">{car.id}</p>
                  <p className="text-[#1D1F26] text-lg">{car.make + " " + car.model}</p>
                  <p className="text-[#1D1F26] text-lg">{car.latitude.toFixed(4)}°N</p>
                  <p className="text-[#1D1F26] text-lg">{car.longitude.toFixed(4)}°E</p>
                </section>
              )}
            </article>
          </div>
        ))}
      </aside>
    </main>
  )
}

export default Fleet