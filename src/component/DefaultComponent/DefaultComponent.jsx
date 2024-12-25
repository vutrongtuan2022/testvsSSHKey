import React, { Children } from "react";
import HeaderComponent from "../HeaderComponent";

function DefaultComponent({ children }) {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  );
}

export default DefaultComponent;
