import React, { memo } from "react";
import type { ReactNode, FC } from "react";
import { ReactHooksStyle } from "./style";
import ReactUseState from "./hooks-demo/ReactUseState";
import ReactUseEffect from "./hooks-demo/ReacUseEffect";

interface Iprops {
  children?: ReactNode;
}

const ReactHooksDemo: FC<Iprops> = memo((props) => {
  const { children } = props;
  console.log("ReactHooksDemo:children----", children);
  return (
    <ReactHooksStyle>
      <ReactUseState className="modelCell" />
      <ReactUseEffect className="modelCell" />
    </ReactHooksStyle>
  );
});

export default ReactHooksDemo;
