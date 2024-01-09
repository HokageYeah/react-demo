import { createContext, useContext, useState } from "react";
const defaultValue = 'light';
// 创建一个共享的 Context
const ThemeContext = createContext<string>(defaultValue);

// 创建一个自定义的 Hook，以便在组件中方便地访问 Context
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeContext, useTheme };
