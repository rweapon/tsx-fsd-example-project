import { store } from "@app/appStore";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactNode;
}

export default function AppProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
