import { useTheme } from "./ThemeContext";
import type { ReactNode, FC } from "react";
import { memo } from "react";

interface Iprops {
  children?: ReactNode;
}
const ReactContexts: FC<Iprops> = memo((props) => {
  const { children } = props;
  console.log("ThemeProvider:children----", children);
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="modelCell">
      <h1>当前主题：{theme}</h1>
      <button onClick={toggleTheme}>切换主题</button>
    </div>
  );
});

export default ReactContexts;
