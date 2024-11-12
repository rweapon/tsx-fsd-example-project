import { useTheme } from "@app/providers/ThemeContext";
import styles from "./styles.module.css";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

export default function Search({ keywords, setKeywords }: Props) {
  const { isDark } = useTheme();

  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        type="text"
        placeholder="Javascript"
        className={styles.input}
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
    </div>
  );
}
