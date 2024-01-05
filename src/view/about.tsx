import PropTypes from "prop-types";
import React, { memo } from "react";
import type { ReactNode, FC } from "react";
interface IProps {
  children?: ReactNode;
}

const about: FC<IProps> = memo((props) => {
  return <div>about</div>;
});

export default about;
