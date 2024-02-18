import { memo, useState, useMemo } from "react";
import type { ReactNode, FC } from "react";
import { UseStatesStyle } from "./style";
import { shallowEqual } from "react-redux";

interface Iprops {
  children?: ReactNode;
}
// 定义一个计算斐波那契数列的递归函数
const fibonacci = (num: number): number => {
  console.log("fibonacci---");
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

const ReactUseMemo: FC<Iprops> = memo((props) => {
  const { children } = props;
  console.log("ReactUseMemo:children----", children);
  // 使用 useState 管理 number 状态
  const [number, setNumber] = useState(1);
  // 使用 useMemo 缓存 fibonacci 函数的返回值
  // 只有当 number 发生变化时，才会重新计算斐波那契数
  const fib = useMemo(() => fibonacci(number), [number]);

  const [numberSenc, setNumberSenc] = useState(1);

  return (
    <div className="modelCell">
      <UseStatesStyle>
        <h1>
          useMemo： {number} is {fib}
        </h1>
        <h1>useMemo-numberSenc： {numberSenc}</h1>
        {/* 点击按钮时，更新 number 值 */}
        <button onClick={() => setNumber(number + 1)}>Increase number</button>
        <button onClick={() => setNumberSenc(numberSenc + 1)}>
          Increase setNumberSenc
        </button>
      </UseStatesStyle>
    </div>
  );
},shallowEqual);
export default ReactUseMemo;
