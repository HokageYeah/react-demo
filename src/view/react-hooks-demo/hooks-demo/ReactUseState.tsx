import React, { memo, useState } from "react";
import type { ReactNode, FC } from "react";
import { UseStatesStyle } from "./style";

interface Iprops {
  children?: ReactNode;
  className: string;
}

const ReactUseState: FC<Iprops> = memo((props) => {
  const { children } = props;
  console.log("ReactUseState:children----", children);
  //count 是状态变量，它的初始值为 0。setCount 是更新 count 的函数
  const [count, setCount] = useState(0);

  const [funCount, setFunCount] = useState(() => {
    return 2;
  });
  return (
    <div className="modelCell">
      <UseStatesStyle>
        <p>useState:{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment++</button>
        <p>useStateFun:{funCount}</p>
        <button onClick={() => setFunCount(funCount + 1)}>IncrementFun++</button>
      </UseStatesStyle>
    </div>
  );
});

export default ReactUseState;