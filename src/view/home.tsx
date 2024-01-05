import PropTypes from "prop-types";
import React, { memo } from "react";
import type { ReactNode, FC } from "react";

interface Iprops {
  children?: ReactNode;
}

const home: FC<Iprops> = memo((props) => {
  const { children } = props;
  console.log("home:children----", children);

  return <div>home</div>;
});

export default home;
