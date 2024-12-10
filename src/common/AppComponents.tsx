import React from "react";
import { heading_type } from "./app-constants";
import { Link } from "react-router-dom";

type ContainerComponentProps = {
  children: JSX.Element[];
  className?: string;
};

type HeadingComponentProps = {
  children: string | JSX.Element[];
  className?: string;
  type?: string;
};

type PageContentComponentProps = {
  children: JSX.Element[];
  className?: string;
};

type LeftPaneComponentProps = {
  children: JSX.Element[];
  className?: string;
};

type RightPaneComponentProps = {
  children: JSX.Element[];
  className?: string;
};

type IconCardComponentProps = {
  imgSrc: string;
  altText: string;
  title?: string;
  className?: string;
};

type TextInputComponentProps = {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler;
  onBlur?: React.FocusEventHandler;
  cols?: number;
  rows?: number;
  className: string;
  type?: string;
};

type ButtonComponentProps = {
  children: string | JSX.Element;
  className?: string;
  onClick?: React.MouseEventHandler;
  link?: string;
};

type FooterComponentProps = {
  children: JSX.Element | JSX.Element[];
};

export const Container: React.FC<ContainerComponentProps> = ({ children, className }) => {
  return <div className={`h-full ${className ?? ""}`}>{children}</div>;
};

export const Heading: React.FC<HeadingComponentProps> = ({ children, className, type = "" }) => {
  const cn = className ?? "";
  return type === heading_type.bold ? (
    <h1 className={`${cn} min-h-[82px] overflow-hidden whitespace-nowrap md:text-6xl lg:text-7xl`.trim()}>{children}</h1>
  ) : (
    <h1 className={`${cn} min-h-[82px] animate-type overflow-hidden whitespace-nowrap font-thin md:text-6xl lg:text-7xl`.trim()}>{children}</h1>
  );
};

export const PageContent: React.FC<PageContentComponentProps> = ({ children, className }) => {
  return (
    <div
      className={`${className ?? ""} flex flex-col gap-10 text-justify text-xs font-light leading-normal md:text-base lg:mt-12 lg:flex-row lg:leading-relaxed lg:tracking-wide`.trim()}
    >
      {children}
    </div>
  );
};

export const LeftPane: React.FC<LeftPaneComponentProps> = ({ children, className }) => {
  return <div className={`${className ?? ""} w-full animate-fade-up space-y-6 md:animate-fade-right lg:mt-2 lg:space-y-8`.trim()}>{children}</div>;
};

export const RightPane: React.FC<RightPaneComponentProps> = ({ children, className }) => {
  return <div className={`${className ?? ""} w-full animate-fade-up md:animate-fade-left lg:mt-2`.trim()}>{children}</div>;
};

export const IconCard: React.FC<IconCardComponentProps> = ({ imgSrc, altText, title, className }) => {
  return (
    <div className={`${className ?? ""} flex animate-fade-up flex-col items-center gap-2 md:animate-fade-left`.trim()}>
      <img src={imgSrc} alt={altText} className="peer size-12 transition-all duration-500 hover:-translate-y-4 md:size-20 lg:size-24" />
      <p className="opacity-0 transition-all duration-500 peer-hover:-translate-y-4 peer-hover:opacity-100">{title}</p>
    </div>
  );
};

export const TextInput: React.FC<TextInputComponentProps> = ({ name, value, onChange, onBlur, cols, rows, className, type = "" }) => {
  const cn = className ?? "";
  return type === "textarea" ? (
    <textarea
      cols={cols}
      rows={rows}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`${cn} resize-none border border-gray-300 px-2`.trim()}
    />
  ) : (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`${cn} h-8 border border-gray-300 px-2 outline-gray-300`.trim()}
    />
  );
};

export const Button: React.FC<ButtonComponentProps> = ({ children, className, onClick, link = "" }) => {
  const cn = className ?? "";
  const defaultClass = "bg-[#46351d] p-3 text-xs font-extralight text-white transition-all duration-200 hover:bg-[#332615] hover:shadow-lg lg:p-4 lg:text-base";
  return (
    <>
      {link ? (
        <Link to={link} className={`${cn} ${defaultClass}`.trim()}>
          {children}
        </Link>
      ) : (
        <button onClick={onClick} className={`${cn} ${defaultClass}`.trim()}>
          {children}
        </button>
      )}
    </>
  );
};

export const Footer: React.FC<FooterComponentProps> = ({ children }) => {
  return <div className="fixed bottom-10 left-1/2 hidden -translate-x-1/2 animate-reveal-up md:block lg:bottom-16">{children}</div>;
};

// List of reusable components -
// - Heading
// - Heading light
// - Text
// - Button
// - Link
