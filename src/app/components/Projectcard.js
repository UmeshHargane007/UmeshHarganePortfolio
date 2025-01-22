"use client";

import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Projectcard({ imgUrl, title, description }) {
  return (
    <div className="w-full max-w-sm mx-auto"> {/* Centering and limiting max width for mobile */}
      <div
        style={{
          background: `url(${imgUrl}) no-repeat center center`,
          backgroundSize: "contain", // Changed to "cover" for better responsiveness
        }}
        className="h-40 w-full md:h-72 rounded-t-xl relative group" // Adjusted height for mobile
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center gap-4">
          {/* <Link
            href="/"
            className="h-12 w-12 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center group/link"
          >
            <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
          </Link> */}
          {/* <Link
            href="/"
            className="h-12 w-12 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center group/link"
          >
            <EyeIcon className="h-6 w-6 text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
          </Link> */}
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-4 px-4">
        <h5 className="text-lg font-semibold mb-2 mt-4 md:text-xl">{title}</h5> {/* Adjusted text size for mobile */}
        {description.split(".").map((item, index) => (
          <p key={index} className="text-sm md:text-base text-[#ADB7BE]"> {/* Adjusted text size for mobile */}
            {item.trim()}
          </p>
        ))}
      </div>
    </div>
  );
} 

export default Projectcard;
