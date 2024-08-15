import React from "react";
import { header_type } from "./component-type";
import { Link } from "react-router-dom";

export const Container = ({ children, className }) => {
  return <div className={`h-full ${className ?? ""}`}>{children}</div>;
};

export const Heading = ({ children, className, headerType = "" }) => {
  const cn = className ?? "";
  return headerType === header_type.bold ? (
    <h1 className={`${cn} lg:text-7xl`.trim()}>{children}</h1>
  ) : (
    <h1 className={`${cn} font-thin lg:text-7xl`.trim()}>{children}</h1>
  );
};

export const PageContent = ({ children, className }) => {
  return (
    <div
      className={`${className ?? ""} mt-5 flex flex-col gap-10 text-justify text-xs font-light leading-normal md:text-base lg:mt-12 lg:flex-row lg:gap-10 lg:leading-relaxed lg:tracking-wide`.trim()}
    >
      {children}
    </div>
  );
};

export const LeftPane = ({ children, className }) => {
  return <div className={`${className ?? ""} mt-2 w-full space-y-6 lg:space-y-8`.trim()}>{children}</div>;
};

export const RightPane = ({ children, className }) => {
  return <div className={`${className ?? ""} w-full`.trim()}>{children}</div>;
};

export const IconCard = ({ imgSrc, altText, title, className }) => {
  return (
    <div className={`${className ?? ""} flex flex-col items-center gap-2`.trim()}>
      <img
        src={imgSrc}
        alt={altText}
        className="peer size-12 transition-all duration-500 hover:-translate-y-4 lg:size-24"
      />
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
    <Link to={link} className={`${cn} bg-[#46351d] p-3 text-xs font-extralight text-white lg:p-4 lg:text-base`.trim()}>
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
