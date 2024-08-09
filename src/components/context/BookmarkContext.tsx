// BookmarkContext.tsx
import React, { createContext, useContext, useState } from "react";
import { NewsItem } from "../../types/data";

interface BookmarkContextType {
  bookmarks: NewsItem[];
  addBookmark: (newsItem: NewsItem) => void;
  removeBookmark: (newsItem: NewsItem) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
};

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [bookmarks, setBookmarks] = useState<NewsItem[]>([]);

  const addBookmark = (newsItem: NewsItem) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, newsItem]);
  };

  const removeBookmark = (newsItem: NewsItem) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((item) => item.id !== newsItem.id)
    );
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
