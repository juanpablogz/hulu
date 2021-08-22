import React from "react";

export const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:animate-bounce">
      <Icon className="h-8 mb-1 ml-2" />
      <p className="opacity-0 group-hover:opacity-100">{title}</p>
    </div>
  );
};
