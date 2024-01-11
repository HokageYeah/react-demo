import { memo, useState, useLayoutEffect, useRef, useEffect } from "react";
import type { ReactNode, FC } from "react";
import { UseStatesStyle } from "./style";

interface Iprops {
  children?: ReactNode;
}

const ReactUseLayoutEffect: FC<Iprops> = memo((props) => {
  const { children } = props;
  console.log("ReactUseLayoutEffect:children----", children);
  const [count, setCount] = useState(0);
  const divRef = useRef<any>(null);
  useLayoutEffect(() => {
    // 当 count 变化时，修改 div 元素的背景色
    divRef.current.style.backgroundColor = count % 2 === 0 ? "gray" : "blue";
    // 在控制台输出调试信息
    console.log("useLayoutEffect executed");
  }, [count]);
  //   在这个例子中，我们使用 useLayoutEffect 在每次 count 变化时修改一个 div 元素的背景颜色。因为我们使用了 useLayoutEffect 而不是 useEffect，
  // 所以背景颜色的更改将在浏览器渲染之前完成，从而避免了闪烁现象
  const divRef2 = useRef<any>(null);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    // 当 count 变化时，修改 div 元素的背景色
    divRef2.current.style.backgroundColor = count2 % 2 === 0 ? "gray" : "blue";
    // 在控制台输出调试信息
    console.log("useEffect executed");
  }, [count2]);
  return (
    <div className="modelCell">
      <UseStatesStyle>
        <p>ReactUseLayoutEffect</p>
        <div ref={divRef}>useLayoutEffect没有闪烁：{count}</div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <div ref={divRef2}>useEffect有闪烁：{count2}</div>
        <button onClick={() => setCount2(count2 + 1)}>Increment2</button>
      </UseStatesStyle>
    </div>
  );
});
export default ReactUseLayoutEffect;
