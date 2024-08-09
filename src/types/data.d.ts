export interface NewsItem {
  id: number;
  sources: {
    id: number;
    url: string;
  }[];
  newsDate: string;
  category: string;
  imageFrom: string;
  image: string;
  imageUrl: string;
  shortDescription: string;
  slug: string;
  title: string;
  is_image_public: boolean;
}

export interface Source {
  id: number;
  url: string;
}