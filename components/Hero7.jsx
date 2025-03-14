
'use client';
import Image from "next/image";

import { RiArrowRightUpLine } from "react-icons/ri";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLiveData() {
      try {
        const response = await axios.get('/api/live');
        setData(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load live data.");
      }
    }
    fetchLiveData();
  }, []);

  return (
    <main className="min-h-screen p-8 bg-gray-100 px-[1rem] md:px-[3rem] font-nunito">
      <h1 className="text-3xl font-bold mb-6 text-gray-600 flex items-center gap-2">Live Health & Therapy News -<span className="">
        <Image src='/image/news.svg' width={40} height={40} alt="new logo" className=""/>
      </span></h1>
      {error && <p className="text-red-500">{error}</p>}
      {data ? (
        data.articles && data.articles.length > 0 ? (
          data.articles.map((article, index) => (
            <div key={index} className="mb-6 p-4 bg-gray-100 grid grid-cols-1 hover:bg-black/10 shadow rounded">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="mt-2">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 gap-1 flex items-center px-2 py-1 rounded w-fit bg-cyan-600/30 hover:bg-cyan-400/90 text-gray-700 hover:text-black cursor-pointer  hover:transition-opacity duration-1000 ease-in-out opacity-100"
              >
                Read more <RiArrowRightUpLine className="text-xl"/>
              </a>
            </div>
          ))
        ) : (
          <p>No live articles found.</p>
        )
      ) : 
        <div className="w-full h-screen flex items-center justify-center">
          <Image src='/image/spinner.gif' width={100} height={100} alt='loader' className='bg-transparent'/>
        </div>
      }
    </main>
  );
}
