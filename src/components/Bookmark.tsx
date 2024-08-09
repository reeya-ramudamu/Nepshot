// Bookmark.tsx
import React from "react";
import { useBookmarks } from "../components/context/BookmarkContext";
import { Link } from "react-router-dom";
import { TruncateText } from "../utils/TruncateText";

const Bookmark: React.FC = () => {
  const { bookmarks } = useBookmarks();

  if (bookmarks.length === 0) {
    return (
      <>
        <div className="bg-white border-b fixed top-0 left-0 right-0 border-gray-200  px-2 sm:px-4 py-3  flex justify-center text-lg font-nep  md:tracking-wide md:text-2xl">
          Bookmark
        </div>
        <div className="self-center text-center mt-16 ">
          No bookmarks available.
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="bg-white border-b fixed top-0 left-0 right-0 border-gray-200  px-2 sm:px-4 py-3  flex justify-center text-lg font-nep  md:tracking-wide md:text-2xl">
        Bookmark
      </div>
      <div className="my-14 ">
        {bookmarks.map((data) => (
          <div key={data.id} className="m-4 w-vw sm:m-0 py-2  sm:bg-slate-100">
            <Link to={`/News/${data.slug}/${data.id}`}>
              <div className="flex rounded-md  items-center border-t-2 bg-white shadow-md p-2 m-1 sm:m-0 ">
                <div className=" px-4">
                  <img
                    src={data.imageUrl}
                    alt={data.title}
                    className=" object-fit "
                    width={180}
                    height={70}
                  />
                </div>
                <div>
                  <div>
                    <div className=" font-bold my-2 text-lg">{data.title}</div>
                  </div>
                  <div>
                    <p className="text-gray-700 text-pretty text-justify text-sm mb-4">
                      {TruncateText(data.shortDescription, 80)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
