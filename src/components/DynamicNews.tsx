import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { getTimeDifference } from "../utils/GetTimeDifference";
import { useParams } from "react-router-dom";
import { NewsItem } from "../types/data";
import { Source } from "../types/data";

const DynamicNews: React.FC = () => {
  const { slug, newsId } = useParams<{ slug: string; newsId: string }>();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await fetch("/data/news.json");
        const data = await response.json();
        const news = data.data.find(
          (item: NewsItem) =>
            item.slug === slug && item.id.toString() === newsId
        );
        setNewsItem(news || null);
      } catch (error) {
        console.error("Failed to fetch news details:", error);
      }
    };

    fetchNewsDetail();
  }, [slug, newsId]);

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="vh-100 w-100 ">
        <div className="bg-white px-2 py-3">
          <Link to={"/News"}>
            <FaArrowLeft className="size-5 " />
          </Link>
        </div>
        <div className="relative">
          <img
            src={newsItem.imageUrl}
            alt={newsItem.title}
            className="w-50 h-70 object-cover"
            width={800}
            height={500}
          />
          <div className="absolute bottom-0 right-0 bg-white text-xs text-black p-1 ">
            {`Image: ${newsItem.imageFrom || "Curator"}`}
          </div>
        </div>
        <div className="m-3">
          <h1 className="text-2xl font-bold mt-5 mb-2">{newsItem.title}</h1>
          <div className="flex justify-between mb-5">
            <div className="text-sm">
              By curator<p className="text-xs">{newsItem.category}</p>
            </div>
            <div>{getTimeDifference(newsItem.newsDate)}</div>
          </div>
          <h1 className="mb-5 text-xl text-pretty text-justify">
            {newsItem.shortDescription}
          </h1>

          <h2 className="text-xl  underline font-bold mt-5 mb-2 ">
            References:
          </h2>
          <ul className="max-w-full">
            {newsItem.sources.map((source: Source) => (
              <li className="flex items-center px-8 py-5" key={source.id}>
                <a
                  href={source.url}
                  className="truncate  text-blue-700 underline"
                >
                  {source.url}...
                </a>
                <div>
                  <GoArrowUpRight className="size-5" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DynamicNews;
