import React from "react";

const ResponsiveLayout = ({ children }) => {
  return (
    <div className="fixed bottom-0 left-0 flex h-12 w-full items-center justify-evenly rounded-t-lg bg-[#574c3c] font-light uppercase shadow-[#574c3c_0_0_20px_0] md:left-0 md:top-0 md:justify-end md:gap-6 md:bg-transparent md:px-20 md:py-10 md:tracking-wide md:shadow-none lg:gap-12 lg:tracking-widest">
      {children}
    </div>
  );
};

export default ResponsiveLayout;
