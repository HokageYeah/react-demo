import { memo, useState, useCallback, useRef } from "react";
import type { ReactNode, FC } from "react";
import { UseStatesStyle } from "./style";

interface Iprops {
  children?: ReactNode;
  increment?: any;
  count?: number;
}

const ReactCallBackDemo: FC<Iprops> = memo((props) => {
  const { children, increment, count } = props;
  console.log("ReactCallBackDemo:children----", children);
  return (
    <div>
      <p>ReactUseCallBack Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
});

const ReactUseCallBack: FC<Iprops> = memo((props) => {
  const { children } = props;
  console.log("ReactUseState:children----", children);
  // 使用useState管理count和value状态
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const increment = useCallback(() => {
    console.log("increment");

    setCount(count + 1);
  }, [count]);
  const handleChange = useCallback((event: any) => {
    setValue(event.target.value);
  }, []);

  // 进一步的useCallBack优化
  const [count2, setCount2] = useState(0);
  const countRef = useRef<any>();
  countRef.current = count2;
  const incrementRef = useCallback(() => {
    console.log("incrementRef");
    setCount2(countRef.current + 1);
  }, []);
  return (
    <div className="modelCell">
      <UseStatesStyle>
        <ReactCallBackDemo increment={increment} count={count} />
        <input value={value} onChange={handleChange} />
        {/* 进一步的优化 */}
        <p>ReactUseCallBack Count 优化版本: {count2}</p>
        <ReactCallBackDemo increment={incrementRef} count={0} />
      </UseStatesStyle>
    </div>
  );
});
export default ReactUseCallBack;
