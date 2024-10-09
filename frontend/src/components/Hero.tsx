import { useState } from "react";

import backgroundimg from "../assets/bgimg.png"

const Hero = () => {
  
  return (
    <div className="mt-4 bg-no-repeat bg-cover py-[10%] flex justify-center items-center z-[-1]}" style={{ backgroundImage: `url(${backgroundimg})` }}>
      <div className="flex flex-col items-center justify-center gap-5 p-6 py-10 bg-white/60">
        <h1 className="text-6xl text-center">Best food for your taste</h1>
        <p className="text-xl text-center">
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </p>
        <div className="flex gap-4">
        <button
            className="bg-[#AD343E] hover:bg-[#FF5C5C] transition-transform hover:scale-105 duration-300 ease-out p-2 px-4 rounded-[118px] text-[#FFF] text-[1.2rem] border-white"
            onClick={() => window.location.href = '/book-table'}
          >
            Book A Table
          </button>
          <button className="p-1.5 rounded-[118px] bg-[#32CD32] hover:bg-[#66E066]  transition-transform  hover:scale-105 duration-300 ease-out  border border-black text-[1.2rem] px-2" onClick={() => window.location.href = '/menu'}>
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
