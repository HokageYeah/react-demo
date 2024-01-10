import { memo, useState, useRef, forwardRef, useImperativeHandle } from "react";
import type { ReactNode, FC } from "react";
import { UseStatesStyle } from "./style";

interface Iprops {
  children?: ReactNode;
  ref?: any;
}

const ForwardedCustomInput: FC<Iprops> =memo(forwardRef((props, ref) => {
  const { children } = props;
  console.log("ReactUseImperativeHandleDemo:children----", children);
  // 创建一个 ref，用于引用 input 元素
  const inputRef = useRef<any>(null);
  // 使用 useImperativeHandle 自定义父组件可以访问的实例方法
  useImperativeHandle(ref, () => ({
    // 定义一个名为 focus 的方法，使父组件能够调用它以聚焦 input 元素
    focus() {
      inputRef.current.focus();
    },
  }));
  return (
    // 返回 input 元素，并将 inputRef 与之关联
    <input type="text" ref={inputRef} />
  );
}));
// 使用 forwardRef 将 ref 传递给 CustomInput 子组件
// const ForwardedCustomInput = memo(ReactUseImperativeHandleDemo);

const ReactUseImperativeHandle: FC<Iprops> = memo((props) => {
  const { children } = props;
  console.log("ReactUseImperativeHandle:children----", children);
  // 创建一个 ref，用于在父组件中引用子组件
  const inputRef = useRef<any>();
  // 定义一个处理函数，当按钮被点击时，调用子组件的 focus 方法
  const handleButtonClick = () => {
    inputRef.current.focus();
  };
  return (
    <div className="modelCell">
      <UseStatesStyle>
        <p>useImperativeHandle</p>
        <ForwardedCustomInput ref={inputRef} />
        // 当按钮被点击时，触发 handleButtonClick 函数
        <button onClick={handleButtonClick}>Focus Input</button>
      </UseStatesStyle>
    </div>
  );
});
export default ReactUseImperativeHandle;
