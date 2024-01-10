import type { ReactNode, FC } from "react";
import React, { memo, useState } from "react";
import { ThemeContext } from "./ThemeContext";
interface Iprops {
  children?: ReactNode;
}

const ThemeProvider: FC<Iprops> = memo((props) => {
  const { children } = props;
  console.log("ThemeProvider:children----", children);
  const [theme, setTheme] = useState("light");
  // 切换主题的函数
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  return (
    // 通过 ThemeContext.Provider 将值传递给子组件
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
});

export default ThemeProvider;
