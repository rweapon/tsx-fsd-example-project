import { useTheme } from "@app/providers/ThemeContext";
import styles from "./styles.module.css";
import { formatDate } from "@shared/helpers";
import { ThemeButton } from "@features/theme";
import { Link } from "react-router-dom";

export default function LayoutHeader() {
  const { isDark } = useTheme();
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>
          <Link to={"/"}>NEWS RUSLAN</Link>
        </h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <ThemeButton />
    </header>
  );
}
