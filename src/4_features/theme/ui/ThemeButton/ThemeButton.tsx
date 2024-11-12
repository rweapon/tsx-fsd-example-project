import { useTheme } from "@app/providers/ThemeContext";
import { themeIcons } from "@shared/assets";

export default function ThemeButton() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <img
      src={isDark ? themeIcons.light : themeIcons.dark}
      alt="theme"
      width={30}
      onClick={toggleTheme}
      style={{ cursor: "pointer" }}
    />
  );
}
