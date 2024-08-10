import React from "react";
import "../App.scss";
import { header_type } from "./component-type";
import { Link } from "react-router-dom";

export const Container = ({ children, className }) => {
  return <div className={`h-full ${className ?? ""}`}>{children}</div>;
};

export const Header = ({ children, className, headerType = "" }) => {
  const cn = className ?? "";
  return headerType === header_type.bold ? <h1 className={cn}>{children}</h1> : <h1 className={`${cn} font-thin`}>{children}</h1>;
};

export const PageContent = ({ children }) => {
  return <div className="mt-20 flex gap-10">{children}</div>;
};

export const LeftPane = ({ children }) => {
  return <div className="w-full space-y-8 text-justify text-base font-light leading-relaxed tracking-wide">{children}</div>;
};

export const RightPane = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export const IconCard = ({ imgSrc, altText, title, className }) => {
  const cn = "flex flex-col items-center gap-2";
  return (
    <div className={className ? `${className} ${cn}` : cn}>
      <img src={imgSrc} alt={altText} className="peer size-24 transition-all duration-500 hover:-translate-y-4" />
      <p className="opacity-0 transition-all duration-500 peer-hover:-translate-y-4 peer-hover:opacity-100">{title}</p>
    </div>
  );
};

export const Button = ({ children, link }) => {
  return (
    <Link to={link} className="bg-[#46351d] p-4 font-extralight text-white">
      {children}
    </Link>
  );
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
