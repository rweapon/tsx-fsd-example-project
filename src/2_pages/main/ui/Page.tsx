import LatestNews from "./LatestNews/LatestNews";
import NewsByFilters from "./NewsByFilters/NewsByFilters";
import styles from "./styles.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
}
