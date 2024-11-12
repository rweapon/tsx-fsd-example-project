import { INews, NewsCard } from "@entities/news";
import withSkeleton from "@shared/hocs/withSkeleton";
import styles from "./styles.module.css";
import { DirectionType, SkeletonType } from "@shared/interfaces";
import { ReactNode } from "react";

interface Props {
  news?: INews[] | null;
  type?: SkeletonType;
  direction?: DirectionType;
  viewNewsSlot?: (news: INews) => ReactNode;
}

function NewsList({ news, type = "item", viewNewsSlot }: Props) {
  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => (
        <NewsCard key={item.id} item={item} type={type} viewNewsSlot={viewNewsSlot}/>
      ))}
    </ul>
  );
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
