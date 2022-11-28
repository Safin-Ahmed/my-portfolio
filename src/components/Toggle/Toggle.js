import React, { useContext } from "react";
import "./Toggle.css";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { ThemeContext } from "../../Context";
const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <BsSunFill className="t-icon light" />
      <BsMoonFill className="t-icon dark" />
      <div
        className="t-button"
        style={{ left: theme.state.darkMode ? 0 : 25 }}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Toggle;
