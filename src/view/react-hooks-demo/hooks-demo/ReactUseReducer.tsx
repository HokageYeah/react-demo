import React, { memo, useReducer } from "react";
import type { ReactNode, FC } from "react";
import { UseStatesStyle } from "./style";
import { type } from "os";

interface Iprops {
  children?: ReactNode;
}
type stateType = {
  count: number;
};
type actionType = {
  type: "increment" | "decrement";
  payload?: number;
};
const initialState: stateType = { count: 0 };
function reducer(state: stateType, action: actionType) {
  switch (action.type) {
    case "increment":
      return { count: state.count + (action.payload || 1) };
    case "decrement":
      return { count: state.count - (action.payload || 1) };
    default:
      throw new Error();
  }
}
const ReactUseReducer: FC<Iprops> = memo((props) => {
  const { children } = props;
  console.log("ReactUseReducer:children----", children);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="modelCell">
      <UseStatesStyle>
        <p>useReducer:{state.count}</p>
        <button
          style={{ marginRight: "20px" }}
          onClick={() => dispatch({ type: "increment", payload: 2 })}
        >
          +
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </UseStatesStyle>
    </div>
  );
});
export default ReactUseReducer;
