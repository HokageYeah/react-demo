import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { addNumberAction, subNumberAction } from "./store/home/actionCreators";
import { constants } from "buffer";
import {
  incrementToolkit,
  decrementToolkit,
  addAsyncNumber,
} from "./store/home-toolkit/reducer";
import { Route, Routes, Navigate, Link, NavLink } from "react-router-dom";
import Home from "./view/home";
import About from "./view/about";
import NotFount from "./view/notFound";

function App(props: any) {
  const [classState, setClassState] = React.useState(false);
  return (
    <div className="App">
      <div className="header">
        <p>Counter: {props.counter}</p>
        <button
          onClick={() => {
            props.increment(1);
          }}
        >
          添加+
        </button>
        <button
          onClick={() => {
            props.decrement(2);
          }}
        >
          减少+
        </button>
        <button
          onClick={() => {
            props.asyncAdd(2);
          }}
        >
          异步调用
        </button>
        <button onClick={() => setClassState(!classState)}></button>
      </div>
      <div className="header">
        <NavLink
          to={"/home"}
          style={{ marginRight: "10px" }}
          className={({isActive}) => (isActive ? "active" : "")}
        >
          首页
        </NavLink>
        <Link to={"/about"} style={{ marginLeft: "10px" }}>
          关于
        </Link>
      </div>
      <div className="content">
        {/* router6这么写， router5用switch */}
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Navigate to="/about" />}></Route>
          <Route path="*" element={<NotFount />} />
        </Routes>
      </div>
    </div>
  );
}

// const mapStateToProps = (state: any) => {
//   return {
//     counter: state.count,
//   };
// }
// const mapDispatchToProps = (dispatch: any) => ({
//   increment(num: number) {
//     dispatch(addNumberAction(num))
//   },
//   decrement(num: number) {
//     dispatch(subNumberAction(num))
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
