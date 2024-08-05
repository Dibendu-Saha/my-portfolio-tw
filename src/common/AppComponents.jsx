import React from "react";
import "../App.scss";
import { component_type } from "./component-type";

export const Header = ({ children, className, headerType = "", type = "" }) => {
  const cn = className ?? "";
  return type === component_type.header ? (
    headerType === component_type.header_light ? (
      <h1 className={`${cn} font-thin`}>{children}</h1>
    ) : (
      <h1 className={cn}>{children}</h1>
    )
  ) : (
    <p className={cn}>{children}</p>
  );
};

// List of reusable components -
// - Header
// - Header light
// - Text
// - Button
// - Link
