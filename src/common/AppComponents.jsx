import React from "react";
import "../App.scss";
import { component_type } from "./component-type";

export const Container = ({ children, className }) => {
  return <div className={`h-full ${className ?? ""}`}>{children}</div>;
};

export const Header = ({ children, className, headerType = "" }) => {
  const cn = className ?? "";
  return headerType === component_type.header_light ? <h1 className={`${cn} font-thin`}>{children}</h1> : <h1 className={cn}>{children}</h1>;
};

export const Button = ({ children }) => {
  return <a className="bg-[#6b5d4a] px-4 py-2 font-extralight text-white">{children}</a>;
};

export const Footer = ({ children }) => {
  // return <div className="absolute bottom-16 left-[50%] translate-x-[-50%] lg:bottom-[80px]">{children}</div>;
  return <div className="absolute bottom-[8%] left-[50%] translate-x-[-50%]">{children}</div>;
};

// List of reusable components -
// - Header
// - Header light
// - Text
// - Button
// - Link
