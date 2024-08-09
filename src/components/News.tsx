import React, { useEffect, useState } from "react";
import { NewsItem } from "../types/data";
import { TruncateText } from "../utils/TruncateText";
import { getTimeDifference } from "../utils/GetTimeDifference";
import { PiShareFatThin } from "react-icons/pi";
import ToggleBookmark from "./ToogleBookmark";
import { Link } from "react-router-dom";

const News: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        // const response = await fetch(
        //   "https://portal.nepshots.com/news/?newsDate=07-11-2024"
        // );
        const response = await fetch("/data/news.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setNewsData(result.data);
        console.log("Fetched Data:", result.data);
      } catch (error) {
        console.error("Failed to fetch news data:", error);
        setError("Failed to fetch news data.");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (newsData.length === 0) {
    return <div>No news available.</div>;
  }

  return (
    <>
      <div className="my-12  sm:bg-slate-100">
        {newsData.map((data: NewsItem) => (
          <div key={data.id} className="m-4 w-vw sm:m-0 py-5 sm:bg-slate-100">
            <Link to={`/News/${data.slug}/${data.id}`}>
              <div className="bg-blue-100 shadow-md rounded-2xl mb-5 p-4">
                <h2 className="text-2xl font-bold mt-5 mb-4">{data.title}</h2>

                <div className="relative">
                  <img
                    src={data.imageUrl}
                    alt={data.title}
                    className="w-full h-60 object-cover rounded-2xl"
                    width={700}
                    height={500}
                  />
                  <div className="absolute bottom-0 right-0 bg-white text-xs text-black p-1 rounded-br-2xl">
                    {`Image: ${data.imageFrom || "Curator"}`}
                  </div>
                </div>
                <div className="p-4 mt-10">
                  <p className="text-gray-700 text-pretty text-justify text-lg mb-4">
                    {TruncateText(data.shortDescription, 180)}
                  </p>
                  <div className="flex justify-between">
                    <div className="bg-yellow-100 h-8 text-xs rounded-full px-4 py-2 mt-10">
                      {data.category}
                    </div>
                    <div className="text-xs mt-10 text-slate-700">
                      {getTimeDifference(data.newsDate)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex justify-between p-4">
              <Link to={`/News/${data.slug}/${data.id}`}>
                <div className="text-xs">{data.sources.length} Source</div>
              </Link>
              <div className="flex gap-4">
                <div className="size-4 cursor-pointer text-black-500">
                  <PiShareFatThin />
                </div>
                <div className="size-4 cursor-pointer text-black-500">
                  <ToggleBookmark newsItem={data} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
