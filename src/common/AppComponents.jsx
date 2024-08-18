import React from "react";
import { heading_type } from "./app-constants";
import { Link } from "react-router-dom";

export const Container = ({ children, className }) => {
  return <div className={`h-full ${className ?? ""}`}>{children}</div>;
};

export const Heading = ({ children, className, type = "" }) => {
  const cn = className ?? "";
  return type === heading_type.bold ? (
    <h1 className={`${cn} min-h-[82px] overflow-hidden whitespace-nowrap md:text-6xl lg:text-7xl`.trim()}>{children}</h1>
  ) : (
    <h1 className={`${cn} animate-type min-h-[82px] overflow-hidden whitespace-nowrap font-thin md:text-6xl lg:text-7xl`.trim()}>{children}</h1>
  );
};

export const PageContent = ({ children, className }) => {
  return (
    <div
      className={`${className ?? ""} flex flex-col gap-10 text-justify text-xs font-light leading-normal md:text-base lg:mt-12 lg:flex-row lg:gap-10 lg:leading-relaxed lg:tracking-wide`.trim()}
    >
      {children}
    </div>
  );
};

export const LeftPane = ({ children, className }) => {
  return <div className={`${className ?? ""} animate-fade-up md:animate-fade-right w-full space-y-6 lg:mt-2 lg:space-y-8`.trim()}>{children}</div>;
};

export const RightPane = ({ children, className }) => {
  return <div className={`${className ?? ""} animate-fade-up md:animate-fade-left w-full lg:mt-2`.trim()}>{children}</div>;
};

export const IconCard = ({ imgSrc, altText, title, className }) => {
  return (
    <div className={`${className ?? ""} animate-fade-up md:animate-fade-left flex flex-col items-center gap-2`.trim()}>
      <img src={imgSrc} alt={altText} className="peer size-12 transition-all duration-500 hover:-translate-y-4 md:size-20 lg:size-24" />
      <p className="opacity-0 transition-all duration-500 peer-hover:-translate-y-4 peer-hover:opacity-100">{title}</p>
    </div>
  );
};

export const TextInput = ({ name, cols, rows, type = "" }) => {
  return type === "textarea" ? (
    <textarea cols={cols} rows={rows} name="message" className="resize-none border border-gray-300" />
  ) : (
    <input type="text" name={name} className="h-8 border border-gray-300" />
  );
};

export const Button = ({ children, link, className }) => {
  const cn = className ?? "";
  return (
    <Link
      to={link}
      className={`${cn} bg-[#46351d] p-3 text-xs font-extralight text-white transition-all duration-200 hover:bg-[#332615] hover:shadow-lg lg:p-4 lg:text-base`.trim()}
    >
      {children}
    </Link>
  );
};

export const Footer = ({ children }) => {
  return <div className="animate-reveal-up fixed bottom-10 left-[50%] hidden translate-x-[-50%] md:block lg:bottom-16">{children}</div>;
};

// List of reusable components -
// - Heading
// - Heading light
// - Text
// - Button
// - Link
