import React, { useState, useEffect } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { NewsItem } from "../types/data";
import { useBookmarks } from "../components/context/BookmarkContext";
interface ToggleBookmarkProps {
  newsItem: NewsItem;
}

const ToggleBookmark: React.FC<ToggleBookmarkProps> = ({ newsItem }) => {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    setIsBookmarked(bookmarks.some((item) => item.id === newsItem.id));
  }, [bookmarks, newsItem]);

  const handleIconClick = () => {
    if (isBookmarked) {
      removeBookmark(newsItem);
    } else {
      addBookmark(newsItem);
    }
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div onClick={handleIconClick} className="cursor-pointer">
      {isBookmarked ? (
        <FaBookmark className="text-black-500 size-4" />
      ) : (
        <FaRegBookmark className="text-gray-500 size-4 " />
      )}
    </div>
  );
};

export default ToggleBookmark;
