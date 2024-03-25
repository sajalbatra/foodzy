import logo from "../assets/whitelogo.svg";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import followinsta from "../assets/followinsta.svg";

const Footer = () => {
    const date=new Date();
    const year=date.getFullYear()
    return (
        <div className="bg-[#474747] text-[#ffffff] mt-5">
    <div className="bg-[#474747] flex justify-around text-[#ffffff] gap-10 p-10 flex-wrap-reverse">
      {/* div one  */}
      <div className="flex flex-col justify-evenly">
        <div className="flex items-center space-x-5 mobile:justify-center">
          <img src={logo} className="" alt="logo" />
          <p className="text-4xl italic font-playfair">Foodzy</p>
        </div>
        <p className="mobile:text-center mobile:m-3">
          In the new era of technology we look into the future with certainty
          and pride for our company and.
        </p>
        <div className="flex justify-start gap-5 mobile:justify-center">
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <CiFacebook />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <RiTwitterXFill />
          </a>
        </div>
      </div>

      {/* div 2  */}
      <div className="flex justify-center gap-10 text-lg mobile:justify-center mobile:items-center mobile:text-md mobile:text-center mobile:mx-[10%] mobile:gap-1">
        <div className="">
          <p className="mb-3 font-bold">Pages</p>
          {["Home", "About", "Menu", "Pricing", "Blog", "Contact", "Delivery"].map((item) => (
            <p className="" key={item}>{item}</p>
          ))}
        </div>
        <div>
          <p className="mb-3 font-bold">Utility Pages</p>
          {["Start Here", "Styleguide", "Password Protected", "404 Not Found", "Licenses", "Changelog", "View More"].map((item) => (
            <p className="" key={item}>{item}</p>
          ))}
        </div>
      </div>

      {/* div 3 */}
      <div className="flex flex-col items-center justify-center text-center">
        <p className="m-3">Follow Us On Instagram</p>
        <img src={followinsta} width={200} height={200} alt="Follow us on Instagram" />
      </div>
    </div>
    <p className="text-center">Copyright © {year} Foodzy. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
