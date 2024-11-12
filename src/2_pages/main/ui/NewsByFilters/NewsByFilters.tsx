import { useAppSelector } from "@app/appStore";
import { NewsFilters } from "@widgets/news";
import styles from "./styles.module.css";
import { useGetCategoriesQuery } from "@entities/categories/api/api";
import NewsListWithPagination from "@pages/main/ui/NewsListWithPagination/NewsListWithPagination";
import { useGetNewsQuery } from "@entities/news/api/api";
import useDebounce from "@shared/hooks/useDebounce";

export default function NewsByFilters() {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data } = useGetCategoriesQuery(null);

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={data?.categories || []} />
      <NewsListWithPagination
        filters={filters}
        news={news}
        isLoading={isLoading}
      />
    </section>
  );
}
