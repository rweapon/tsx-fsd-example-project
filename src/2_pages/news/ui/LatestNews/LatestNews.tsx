import { useGetLatestNewsQuery } from "@entities/news/api/api";
import styles from "./styles.module.css";
import { NewsListWithSkeleton } from "@widgets/news";

export default function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <NewsListWithSkeleton
        news={data && data.news}
        isLoading={isLoading}
        direction="row"
        type="banner"
      />
    </section>
  );
}
