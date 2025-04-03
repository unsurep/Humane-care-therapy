
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
    <div>

    <h1 className="text-2xl md:text-3xl font-bold my-10 text-gray-600 flex font-nunito w-full justify-center gap-2">News Update - <span className="">
      <Image src='/image/news.svg' width={40} height={40} alt="new logo" className=""/></span>
    </h1>

    <div className='p-4 md:p-6">'>
      <main className=" font-poppins grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       
      {error && <p className="text-red-500">{error}</p>}

          {data ? 
            (data.articles && data.articles.length > 0 ? 
              (data.articles.map((article, index) => (
            <div key={index} className="p-4 bg-white shadow-lg rounded-lg hover:bg-black/10 transition duration-300">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-48 sm:h-64 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-base  font-semibold">{article.title}</h2>

              {/* Date Added Below */}
              {article.publishedAt && (<p className="text-xs md:text-sm text-gray-500 mb-2">Published on: {new Date(article.publishedAt).toLocaleDateString()}</p>)}

              <p className="mt-4 text-sm md:text-base text-gray-700">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 px-4 py-2 rounded bg-cyan-600/30 hover:bg-cyan-400/90 text-gray-700 hover:text-black transition-opacity duration-300 text-sm md:text-base"
              >
                Read more 
              </a>
            </div>))) : (<p className="text-center text-gray-600">No live articles found.</p>)) : 

            <div className="w-full flex items-center justify-center">
              <Image src='/image/spinner.gif' width={100} height={100} alt='loader' className='bg-white-20'/>
            </div>
          }
          </main>
        </div>
    </div>
  );
}
