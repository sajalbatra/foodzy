import logo from "../assets/whitelogo.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import followinsta from "../assets/followinsta.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const navigate=useNavigate();
  return (
    <div className="bg-[#474747] text-[#ffffff] mt-5 ">
      <div className="bg-[#474747] flex  text-[#ffffff] gap-10 p-10 flex-wrap-reverse justify-evenly mobile:text-center">
        {/* div one  */}
        <div className="flex flex-col justify-evenly lg-device:w-[30%]">
          <div className="flex items-center space-x-5 mobile:justify-center transition-transform transform group  ">
            <img src={logo} className="group-hover:scale-[110%] duration-300 ease-out cursor-pointer" alt="logo" onClick={()=>navigate('/')}/>
            <p className="text-4xl italic font-playfair group-hover:scale-[110%] duration-300 ease-out cursor-pointer" onClick={()=>navigate('/')}>Foodzy</p>
          </div>
          <p className="mobile:text-center mobile:m-3">
            In the new era of technology we look into the future with certainty
            and pride for our company and.
          </p>
          <div className="flex justify-start gap-5 mobile:justify-center">
            <a href="https://instagram.com" aria-label="Instagram" className=" scale-[140%] transition-transform transform hover:scale-[170%] duration-300 ease-out">
              <RiInstagramFill />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className=" scale-125 transition-transform transform hover:scale-150 duration-300 ease-out">
              <FaFacebookSquare />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className=" scale-[120%] transition-transform transform hover:scale-[145%] duration-300 ease-out">
            <FaXTwitter />
            </a>
          </div>
        </div>

        {/* div 2  */}
        <div className="flex justify-center gap-10 text-lg mobile:justify-center mobile:items-center mobile:text-md mobile:text-center mobile:mx-[10%] mobile:gap-1">
          <div className="">
            <p className="mb-3 font-bold">Pages</p>
            {[
              "Home",
              "About",
              "Menu",
              "Pricing",
              "Blog",
              "Contact",
              "Delivery",
            ].map((item) => (
              <p className=" transition-transform transform hover:scale-[110%] hover:text-[#B0B0B0]  duration-200 ease-out" key={item}>
                {item}
              </p>
            ))}
          </div>
          <div>
            <p className="mb-3 font-bold">Utility Pages</p>
            {[
              "Start Here",
              "Styleguide",
              "Password Protected",
              "404 Not Found",
              "Licenses",
              "Changelog",
              "View More",
            ].map((item) => (
              <p className=" transition-transform transform hover:scale-[110%] hover:text-[#B0B0B0]  duration-200 ease-out" key={item} >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* div 3 */}
        <div className="flex flex-col items-center justify-center text-center">
          <p className="m-3">Follow Us On Instagram</p>
          <img
            src={followinsta}
            width={200}
            height={200}
            alt="Follow us on Instagram"
          />
        </div>
      </div>
      <p className="pb-5 text-center">
        Copyright © {year} Foodzy. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
