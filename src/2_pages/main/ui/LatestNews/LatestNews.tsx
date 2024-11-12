import { useGetLatestNewsQuery } from "@entities/news/api/api";
import styles from "./styles.module.css";
import { NewsListWithSkeleton } from "@widgets/news";
import { INews } from "@entities/news";
import { useAppDispatch } from "@app/appStore";
import { setCurrentNews } from "@entities/news/model/slice";
import { useNavigate } from "react-router-dom";

export default function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };
  return (
    <section className={styles.section}>
      <NewsListWithSkeleton
        news={data && data.news}
        isLoading={isLoading}
        direction="row"
        type="banner"
        viewNewsSlot={(news: INews) => (
          <p
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => navigateTo(news)}
          >
            view more...
          </p>
        )}
      />
    </section>
  );
}
