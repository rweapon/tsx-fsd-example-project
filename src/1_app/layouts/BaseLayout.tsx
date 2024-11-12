import { useTheme } from "@app/providers/ThemeContext";
import { LayoutHeader } from "@widgets/header";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <LayoutHeader />
      <Outlet />
    </div>
  );
}
