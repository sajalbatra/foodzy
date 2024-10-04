import backgroundimg from "../assets/bgimg.png"

const Hero = () => {
  return (
    <div className="mt-4 bg-no-repeat bg-cover py-[10%] flex justify-center items-center z-[-1]}" style={{ backgroundImage: `url(${backgroundimg})` }}>
      <div className="flex flex-col items-center justify-center gap-5 p-6 py-10 backdrop-blur-md bg-white/30">
        <h1 className="text-6xl text-center">Best food for your taste</h1>
        <p className="text-xl text-center">
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#AD343E] p-2 px-4 rounded-[118px] text-[#FFF] text-[1.2rem] border-white">
            Book A Table
          </button>
          <button className="p-1.5 rounded-[118px]  border border-black text-[1.2rem]">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
