import NewsCard from "./ui/NewsCard/NewsCard";
import NewsDetails from "@entities/news/ui/NewsDetails/NewsDetails";
import {
  NewsApiResponse,
  INews,
  ParamsType,
  IFilters,
} from "@entities/news/model/types";

export type { NewsApiResponse, INews, ParamsType, IFilters };

export { NewsCard, NewsDetails };
