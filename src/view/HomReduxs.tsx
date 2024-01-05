import PropTypes from "prop-types";
import React, { memo } from "react";
import type { ReactNode, FC } from "react";
import {
  addNumberAction,
  subNumberAction,
  addNumberActionAsync,
} from "../store/home/actionCreators";
import { connect } from "react-redux";
interface IProps {
  children?: ReactNode;
  counter: number;
  increment: Function;
  decrement: Function;
  asyncAdd: Function;
}

const about: FC<IProps> = memo((props) => {
  return (
    <div>
      <p>传统的redux-Counter: {props.counter}</p>
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
          props.asyncAdd(2);
        }}
      >
        异步调用+
      </button>
    </div>
  );
});

const mapStateToProps = (state: any) => {
  console.log("mapStateToProps---", state.home);
  return {
    counter: state.home.count,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  increment(num: number) {
    console.log("--");
    dispatch(addNumberAction(num));
  },
  decrement(num: number) {
    console.log("++");
    dispatch(subNumberAction(num));
  },
  asyncAdd(num: number) {
    dispatch(addNumberActionAsync(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(about);
