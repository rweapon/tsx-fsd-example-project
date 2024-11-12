import React, { useRef } from "react";
import styles from "./styles.module.css";
import { useTheme } from "@app/providers/ThemeContext";

interface Props {
  step? : number;
  children: React.ReactElement;
}

export default function Slider({ children, step = 150 }: Props) {
  const { isDark } = useTheme();

  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
      <button onClick={scrollLeft} className={styles.arrow}>
        {"<"}
      </button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={styles.arrow}>
        {">"}
      </button>
    </div>
  );
}
