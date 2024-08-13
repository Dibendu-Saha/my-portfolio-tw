import React from "react";
import "../App.scss";
import { header_type } from "./component-type";
import { Link } from "react-router-dom";

export const Container = ({ children, className }) => {
  return <div className={`h-full ${className ?? ""}`}>{children}</div>;
};

export const Heading = ({ children, className, headerType = "" }) => {
  const cn = className ?? "";
  return headerType === header_type.bold ? <h1 className={cn}>{children}</h1> : <h1 className={`${cn} font-thin`}>{children}</h1>;
};

export const PageContent = ({ children }) => {
  return (
    <div className="mt-5 flex flex-col gap-10 text-justify text-xs font-light leading-normal lg:mt-12 lg:flex-row lg:gap-10 lg:text-base lg:leading-relaxed lg:tracking-wide">
      {children}
    </div>
  );
};

export const LeftPane = ({ children, className }) => {
  return <div className={className ? `${className} w-full space-y-6 lg:space-y-8` : "w-full space-y-6 lg:space-y-8"}>{children}</div>;
};

export const RightPane = ({ children, className }) => {
  return <div className={className ? `${className} w-full` : "w-full"}>{children}</div>;
};

export const IconCard = ({ imgSrc, altText, title, className }) => {
  const cn = "flex flex-col items-center gap-2";
  return (
    <div className={className ? `${className} ${cn}` : cn}>
      <img src={imgSrc} alt={altText} className="peer size-12 transition-all duration-500 hover:-translate-y-4 lg:size-24" />
      <p className="opacity-0 transition-all duration-500 peer-hover:-translate-y-4 peer-hover:opacity-100">{title}</p>
    </div>
  );
};

export const Button = ({ children, link }) => {
  return (
    <Link to={link} className="bg-[#46351d] p-3 text-xs font-extralight text-white lg:p-4 lg:text-base">
      {children}
    </Link>
  );
};

export const Footer = ({ children }) => {
  return <div className="fixed bottom-10 left-[50%] hidden translate-x-[-50%] md:block lg:bottom-16">{children}</div>;
};

// List of reusable components -
// - Heading
// - Heading light
// - Text
// - Button
// - Link
