import { SkeletonType, DirectionType } from "@shared/interfaces";
import styles from "./styles.module.css";

interface Props {
  type?: SkeletonType;
  direction?: DirectionType;
  count?: number;
}

export default function Skeleton({
  type = "banner",
  direction = "column",
  count = 1,
}: Props) {
  return (
    <>
      {count > 1 ? (
        <ul
          className={
            direction === "column" ? styles.columnList : styles.rowList
          }
        >
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={type === "banner" ? styles.banner : styles.item}
            ></li>
          ))}
        </ul>
      ) : (
        <li className={type === "banner" ? styles.banner : styles.item}></li>
      )}
    </>
  );
}
