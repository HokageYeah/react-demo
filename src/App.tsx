import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate, Link, NavLink } from "react-router-dom";
import HomeToolkitRedux from "./view/HomeToolkitRedux";
import HomRedux from "./view/HomReduxs";
import NotFount from "./view/NotFounds";
import ReactHooksDemo from "./view/react-hooks-demo/ReactHooksDemo";

function App(props: any) {
  // const [classState, setClassState] = React.useState(false);
  return (
    <div className="App">
      <div className="header">
        <NavLink
          to={"/home"}
          style={{ marginRight: "10px" }}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          HomeToolkitRedux
        </NavLink>
        <Link to={"/about"} style={{ margin: "0px 10px" }}>
          HomRedux
        </Link>
        <Link to={"/reactHooks"} style={{ marginLeft: "10px" }}>
          ReactHooksDemo
        </Link>
      </div>
      <div className="content">
        {/* router6这么写， router5用switch */}
        <Routes>
          <Route path="/home" element={<HomeToolkitRedux />}></Route>
          <Route path="/about" element={<HomRedux />}></Route>
          <Route path="/reactHooks" element={<ReactHooksDemo />}></Route>
          <Route path="/" element={<Navigate to="/about" />}></Route>
          <Route path="*" element={<NotFount />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
