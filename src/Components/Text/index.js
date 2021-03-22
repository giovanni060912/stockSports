import React from "react";
import { TextNew } from "./styled";
import PropTypes from "prop-types";

const NewText = ({
  text,
  mTop,
  mBottom,
  onPress,
  size,
  width,
  align,
  mLeft,
  mRight,
  Tcolor,
}) => {
  return (
    <TextNew
      mTop={mTop}
      mBottom={mBottom}
      onPress={onPress}
      size={size}
      width={width}
      align={align}
      mLeft={mLeft}
      mRight={mRight}
      Tcolor={Tcolor}
    >
      {text}
    </TextNew>
  );
};
NewText.propTypes = {
  color: PropTypes.string,
};
export default NewText;
