import React, { memo } from "react";
import type { ReactNode, FC } from "react";
import { ReactHooksStyle } from "./style";
import ReactUseState from "./hooks-demo/ReactUseState";
import ReactUseEffect from "./hooks-demo/ReacUseEffect";
import ReactContexts from "./hooks-demo/react-context/ReactContexts";
import ThemeProvider from "./hooks-demo/react-context/ThemeProvider";
import ReactUseCallBack from "./hooks-demo/ReactUseCallBack";
import ReactUseMemo from "./hooks-demo/ReactUseMemo";
import ReactUseRef from "./hooks-demo/ReactUseRef";
import ReactUseImperativeHandle from "./hooks-demo/ReactUseImperativeHandle";
import ReactUseLayoutEffect from "./hooks-demo/ReactUseLayoutEffect";
import ReactSetState from "./hooks-demo/ReactSetState";
import ReactUseTransition from "./hooks-demo/ReactUseTransition";
import ReactUseDeferredValue from "./hooks-demo/ReactUseDeferredValue";

interface Iprops {
  children?: ReactNode;
}

const ReactHooksDemo: FC<Iprops> = memo((props) => {
  const { children } = props;
  console.log("ReactHooksDemo:children----", children);
  return (
    <ReactHooksStyle>
      <ReactSetState />
      <ReactUseState />
      <ReactUseEffect />
      <ThemeProvider>
        <ReactContexts />
      </ThemeProvider>
      <ReactUseCallBack />
      <ReactUseMemo />
      {/* <ReactUseRef /> */}
      <ReactUseImperativeHandle />
      <ReactUseTransition />
      <ReactUseDeferredValue />
      <ReactUseLayoutEffect />
    </ReactHooksStyle>
  );
});

export default ReactHooksDemo;
