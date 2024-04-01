import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button: React.FC = () => {
  return (
    <div className="Button__container">
      <div className="Button">
        <Link className="Button__type" to="/bonus">
          БОНУС
        </Link>
      </div>
      <div className="Button">
        <Link className="Button__type" to="/rules">
          ПРАВИЛА
        </Link>
      </div>
    </div>
  );
};

export default Button;
