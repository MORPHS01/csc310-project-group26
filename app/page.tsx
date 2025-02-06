"use client"
import Script from 'next/script';
import Link from 'next/link';

export default function Home() {
  const groupName = "GROUP 26 PROJECT";

  return (
    <main className="px-10 py-5">
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl">{groupName}</p>
        <Link href="/fleet-tracking"><button className="hover:bg-red-800 bg-red-500 text-white text-base px-5 py-3 rounded-lg transition-all">Fleet Tracking App</button></Link>
      </div>

      <header className="flex w-full justify-center my-2">
        <p className="text-2xl text-black font-bold">Search Engine Results Page</p>
      </header>
      {/* custom Google web scraper */}
      <Script async src="https://cse.google.com/cse.js?cx=9761500df74d5452d"/>
      <div className="gcse-search"/>
   </main>
  );
}
