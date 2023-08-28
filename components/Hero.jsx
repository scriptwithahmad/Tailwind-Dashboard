import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="globalCss">
        <div className="max-w-full gap-5 mt-6 grid sm:grid-cols-2 sm:gap-2 lg:grid-cols-3">
          <div className="border-2 shadow-sm p-6 rounded-lg w-full hover:bg-gray-100">
            <Link className="text-xl sm:text-base hover:text-[#7079d3]" href={'/Participants'}>Participants</Link>
          </div>
          <div className="border-2 shadow-sm p-6 rounded-lg w-full hover:bg-gray-100">
            <Link className="text-xl sm:text-base hover:text-[#7079d3]" href={'/RegisterTable'}>Registration Table</Link>
          </div>
          <div className="border-2 shadow-sm p-6 rounded-lg w-full hover:bg-gray-100">
            <Link className="text-xl sm:text-base hover:text-[#7079d3]" href={'/Team'}>Teams</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
