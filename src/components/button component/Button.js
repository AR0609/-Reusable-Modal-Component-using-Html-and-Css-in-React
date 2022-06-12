import React from "react";
import propTypes from "prop-types";
import "./Button.scss";

const Buttons = ({
  children,
  onPress,
  leftIcon,
  rightIcon,
  disabled = false,
  loading = false,
  className = "",
  inactive = false,
  btnType = "primary",
  style,
  type = "",
  onClick,
  secondaryactive,
}) => {
  return (
    <button
      className={`${className} ${btnType} buttonnew 
			${inactive ? "inactive" : ""}	${secondaryactive ? "secondary-active" : ""} `}
      type={type}
      disabled={disabled}
      style={style}
      onClick={onClick}
      onPress={onPress}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
};

export default Buttons;
Buttons.propTypes = {
  children: propTypes.any.isRequired,
  leftIcon: propTypes.bool,
  rightIcon: propTypes.bool,
  onPress: propTypes.string,
  disabled: propTypes.bool,
  loading: propTypes.bool,
  className: propTypes.string,
  inactive: propTypes.bool,
  type: propTypes.string,
  style: propTypes.object,
  onClick: propTypes.func,
};
