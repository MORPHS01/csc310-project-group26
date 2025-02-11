"use client"
import Script from 'next/script';

export default function Home() {

  return (
    <main>
      <header className="flex w-full justify-center mb-2 mt-0.5">
        <p className="text-2xl text-black font-bold">Search Engine Results Page</p>
      </header>
      {/* custom Google web scraper */}
      <Script async src="https://cse.google.com/cse.js?cx=9761500df74d5452d"/>
      <div className="gcse-search"/>
   </main>
  );
}
