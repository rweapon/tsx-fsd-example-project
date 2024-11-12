import { INews } from "@entities/news/model/types";
import styles from "./styles.module.css";
import { Image } from "@shared/ui";
import { formatTimeAgo } from "@shared/helpers";

interface Props {
  item: INews;
}

export default function NewsDetails({ item }: Props) {
  return (
    <div className={styles.details}>
      <Image image={item?.image} />
      <div className={styles.description}>
        <p>
          {item.description} ({item.language}){" "}
          <a target="_blank" href={item.url}>
            read more...
          </a>
        </p>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
        <ul>
          {item.category.map((category) => (
            <button className={styles.button}>{category}</button>
          ))}
        </ul>
      </div>
    </div>
  );
}
