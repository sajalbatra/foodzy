import logo from "../assets/whitelogo.svg";
<<<<<<< HEAD
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTwitter } from "react-icons/fa";
=======
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
>>>>>>> 741829880436539afaf64c50a3e0b4054e11e295
import followinsta from "../assets/followinsta.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
<<<<<<< HEAD

  const pages = ["Home", "About", "Menu", "Pricing", "Blog", "Contact", "Delivery"];
  const utilityPages = [
    "Start Here",
    "Styleguide",
    "Password Protected",
    "404 Not Found",
    "Licenses",
    "Changelog",
    "View More",
  ];

  return (
    <footer className="bg-[#474747] text-white mt-5">
      {/* Footer Content */}
      <div className="flex flex-wrap justify-evenly gap-10 p-10 lg:flex-nowrap lg:items-start lg:justify-between mobile:text-center tablet:text-left">
        {/* Brand Section */}
        <div className="flex flex-col lg:w-1/3 space-y-5">
          <div className="flex items-center space-x-5 justify-center lg:justify-start">
            <img src={logo} alt="logo" className="w-12 h-12" />
            <p className="text-4xl italic font-playfair">Foodzy</p>
=======
  const navigate=useNavigate();
  return (
    <div className="bg-[#474747] text-[#ffffff] mt-5 ">
      <div className="bg-[#474747] flex  text-[#ffffff] gap-10 p-10 flex-wrap-reverse justify-evenly mobile:text-center">
        {/* div one  */}
        <div className="flex flex-col justify-evenly lg-device:w-[30%]">
          <div className="flex items-center space-x-5 mobile:justify-center transition-transform transform group  ">
            <img src={logo} className="group-hover:scale-[110%] duration-300 ease-out cursor-pointer" alt="logo" onClick={()=>navigate('/')}/>
            <p className="text-4xl italic font-playfair group-hover:scale-[110%] duration-300 ease-out cursor-pointer" onClick={()=>navigate('/')}>Foodzy</p>
>>>>>>> 741829880436539afaf64c50a3e0b4054e11e295
          </div>
          <p className="text-center lg:text-left">
            In the new era of technology, we look into the future with certainty
            and pride for our company and its innovations.
          </p>
<<<<<<< HEAD
          {/* Social Media Links */}
          <div className="flex justify-center lg:justify-start gap-5">
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-400">
              <CiFacebook size={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter size={24} />
=======
          <div className="flex justify-start gap-5 mobile:justify-center">
            <a href="https://instagram.com" aria-label="Instagram" className=" scale-[140%] transition-transform transform hover:scale-[170%] duration-300 ease-out">
              <RiInstagramFill />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className=" scale-125 transition-transform transform hover:scale-150 duration-300 ease-out">
              <FaFacebookSquare />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className=" scale-[120%] transition-transform transform hover:scale-[145%] duration-300 ease-out">
            <FaXTwitter />
>>>>>>> 741829880436539afaf64c50a3e0b4054e11e295
            </a>
          </div>
        </div>

<<<<<<< HEAD
        {/* Links Section */}
        <div className="flex justify-center gap-10 text-lg lg:text-base lg:justify-start lg:w-1/3">
          {/* Pages Links */}
          <div className="space-y-3">
            <p className="font-bold">Pages</p>
            {pages.map((item) => (
              <p key={item} className="hover:text-gray-400 cursor-pointer transition">
=======
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
>>>>>>> 741829880436539afaf64c50a3e0b4054e11e295
                {item}
              </p>
            ))}
          </div>
<<<<<<< HEAD

          {/* Utility Pages Links */}
          <div className="space-y-3">
            <p className="font-bold">Utility Pages</p>
            {utilityPages.map((item) => (
              <p key={item} className="hover:text-gray-400 cursor-pointer transition">
=======
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
>>>>>>> 741829880436539afaf64c50a3e0b4054e11e295
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Instagram Section */}
        <div className="flex flex-col items-center lg:w-1/3">
          <p className="mb-3 text-center">Follow Us On Instagram</p>
          <img
            src={followinsta}
            alt="Follow us on Instagram"
            width={200}
            height={200}
            className="hover:opacity-90 transition"
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#333333] py-5">
        <p className="text-center text-sm">
          Copyright © {year} Foodzy. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
