"use client"
import Script from 'next/script';

export default function Home() {
  const groupName = "GROUP 26";

  return (
    <main className="px-10 py-5">
      <p className="font-bold text-xl">{groupName}</p>
      {/* custom Google web scraper */}
      <Script async src="https://cse.google.com/cse.js?cx=9761500df74d5452d"/>
      <div className="gcse-search"/>
   </main>
  );
}
