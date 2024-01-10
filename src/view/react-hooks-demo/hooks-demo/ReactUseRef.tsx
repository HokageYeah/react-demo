import { memo, useRef, useState, useEffect } from "react";
import type { ReactNode, FC } from "react";
import { UseStatesStyle } from "./style";

interface Iprops {
  children?: ReactNode;
}

// 保存一个数据，这个对象在整个生命周期中可以保存不变
function Timer() {
  const [timer, setTimer] = useState(0);
  const countRef = useRef(timer);
  let countDefault = 0;
  console.log("Timer:children----");

  useEffect(() => {
    console.log("countRef.current---", countRef.current);
    console.log("countDefault---", countDefault);
    countRef.current = timer;
    countDefault = timer;
  }, [timer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1);
      console.log("timer---", timer);
      // setTimer(timer + 1);
    }, 1000);

    return () => {
      console.log("clearInterval---", timer);
      clearInterval(interval);
    };
  }, []);

  const alertCurrentTimer = () => {
    alert(`Current Timer: ${countRef.current}-----${countDefault}`);
  };

  return (
    <div>
      <div>Timer: {timer}</div>
      <button onClick={alertCurrentTimer}>Alert Current Timer</button>
    </div>
  );
}

// 引入DOM（或者组件，但是需要是class组件）元素
const ReactUseRef: FC<Iprops> = memo((props) => {
  const { children } = props;
  console.log("ReactUseRef:children----", children);
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // 当按钮被点击时，使 input 元素获得焦点
    (inputEl.current as unknown as HTMLInputElement).focus();
  };
  return (
    <div className="modelCell">
      <UseStatesStyle>
        <h1>useRef</h1>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
        <Timer />
      </UseStatesStyle>
    </div>
  );
});
export default ReactUseRef;
