import PropTypes from "prop-types";
import React, { memo } from "react";
import type { ReactNode, FC } from "react";

interface Iprops {
  children?: ReactNode;
}

const NotFound: FC<Iprops> = memo((props) => {
  const { children } = props;
  console.log("NotFound:children----", children);

  return <div>NotFound</div>;
});

export default NotFound;
