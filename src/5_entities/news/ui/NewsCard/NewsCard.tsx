import { INews } from "@entities/news";
import { formatTimeAgo } from "@shared/helpers";
import { Image } from "@shared/ui";
import { SkeletonType } from "@shared/interfaces";
import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  item: INews;
  type: SkeletonType;
  viewNewsSlot?: (news: INews) => ReactNode;
}

export default function NewsCard({ item, type = "item", viewNewsSlot }: Props) {
  return (
    <li className={` ${type === "item" ? styles.card : styles.banner}`}>
      {type === "banner" ? (
        <Image image={item?.image} />
      ) : (
        <div
          className={styles.wrapper}
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      )}
      <div className={`${type === "item" && styles.info}`}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.date}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
      {viewNewsSlot ? viewNewsSlot(item) : null}
    </li>
  );
}
