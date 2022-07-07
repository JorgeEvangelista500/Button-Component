import React from "react";
import PropTypes from "prop-types";
import "./button.css";

export const Button = ({
  backgroundColor,
  size,
  label,
  font,
  fontColor,
  link,
  ...props
}) => {
  const bgColor = backgroundColor || null;
  const fontFamily = font || null;
  const color = fontColor || null;
  return (
    <button
      type="button"
      className={link ? "button-link" : ["button", `button--${size}`].join(" ")}
      style={{ backgroundColor: bgColor, fontFamily, color }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,

  fontColor: PropTypes.string,

  size: PropTypes.oneOf(["small", "medium", "large"]),

  label: PropTypes.string.isRequired,

  font: PropTypes.oneOf(["Nunito Sans", "cursive", "fantasy"]),

  link: PropTypes.bool,

  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  size: "medium",
  font: "Nunito Sans",
  fontColor: "#fffff",
  link: false,
  onClick: undefined,
};
