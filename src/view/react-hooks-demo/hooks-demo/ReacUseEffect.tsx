import React, { memo, useState, useEffect } from "react";
import type { ReactNode, FC } from "react";
import { UseStatesStyle } from "./style";

interface Iprops {
  children?: ReactNode;
}

const ReactUseEffect: FC<Iprops> = memo((props) => {
  const { children } = props;
  console.log("ReactUseEffect:children----", children);
  const [count, setCount] = useState(0);

  // 使用 useEffect 来实现副作用操作
  useEffect(() => {
    // 当 count 更新时，更新页面标题
    document.title = `点击次数：${count}`;
    console.log("更新操作执行了");
    // 如果组件卸载，我们需要清除副作用，避免内存泄漏
    return () => {
      console.log("清除操作先执行了");
      document.title = "React App";
    };
  }, [count]); // 指定 count 作为依赖，当 count 变化时，会重新执行 useEffect 函数


  useEffect(() => {
    console.log("类似componentDidMount操作");
    // 如果组件卸载，我们需要清除副作用，避免内存泄漏
    return () => {
      console.log("类似componentWillUnmount操作");
    };
  }, []); 
  return (
    <div className="modelCell">
      <UseStatesStyle>
        <p>useEffect点击了 {count} 次</p>
        <button onClick={() => setCount(count + 1)}>点击</button>
      </UseStatesStyle>
    </div>
  );
});

export default ReactUseEffect;
