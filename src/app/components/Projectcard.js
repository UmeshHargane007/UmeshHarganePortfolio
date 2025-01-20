"use client";

import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Projectcard({ imgUrl, title, description }) {
  return (
    <div>
      <div
        style={{
          background: `url(${imgUrl}) no-repeat center center`,
          backgroundSize: "contain",
      
        }}
        className="h-full w-full md:h-72 rounded-t-xl relative group "
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center gap-4">
          {/* <Link
            href="/"
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
          </Link> */}
          {/* <Link
            href="/"
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
          </Link> */}
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 mt-5">{title}</h5>
        {description.split(".").map((item, index) => {
          return (
            <p key={index} className="text-[#ADB7BE]">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Projectcard;
