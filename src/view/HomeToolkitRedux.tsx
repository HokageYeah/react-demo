import { memo } from "react";
import type { ReactNode, FC } from "react";
import {
  incrementToolkit,
  decrementToolkit,
  addAsyncNumber,
} from "../store/home-toolkit/reducer";
import { connect } from "react-redux";
import { UseStatesStyle } from "./react-hooks-demo/hooks-demo/style";
interface Iprops {
  children?: ReactNode;
  counter: number;
  increment: Function;
  decrement: Function;
  asyncAdd: Function;
}

const homeToolkit: FC<Iprops> = memo((props) => {
  const { children } = props;
  console.log("home:children----", children);

  return (
    <UseStatesStyle>
      <div className="useHooks">
        <p>最新的reduxToolkit-Counter: {props.counter}</p>
        <button
          onClick={() => {
            props.increment(1);
          }}
        >
          添加+
        </button>
        <button
          style={{ marginLeft: "20px", marginRight: "20px" }}
          onClick={() => {
            props.decrement(2);
          }}
        >
          减少-
        </button>
        <button
          onClick={() => {
            props.asyncAdd(5);
          }}
        >
          异步调用+
        </button>
      </div>
    </UseStatesStyle>
  );
});

const mapStateToProps = (state: any) => {
  return {
    counter: state.tookitCounter.count,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  increment(num: number) {
    dispatch(incrementToolkit(num));
  },
  decrement(num: number) {
    dispatch(decrementToolkit(num));
  },
  asyncAdd: (num: number) => {
    dispatch(addAsyncNumber(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(homeToolkit);
