import { useRouter } from "next/dist/client/router";
import React from "react";
import requests from "../utils/requests";

export const Nav = () => {
  // console.log(Object.entries(request));
  const router = useRouter()
  return (
    <nav>
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer transition duration-100 
            transform hover:scale-125 hover:text-white 
            active:text-red-500 last:pr-24"
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
};
