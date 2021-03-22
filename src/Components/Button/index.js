import React from "react";
import { ButtonPrimary } from "./styled";
import PropTypes from "prop-types";
import NewText from "../Text";

const Button = ({ text, mTop, onPress, Bcolor, color }) => {
  return (
    <ButtonPrimary mTop={mTop} onPress={onPress} Bcolor={Bcolor}>
      <NewText text={text} Bcolor={Bcolor} color={color} />
    </ButtonPrimary>
  );
};
Button.propTypes = {
  mTop: PropTypes.number,
};

export default Button;
