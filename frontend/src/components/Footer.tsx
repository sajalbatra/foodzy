import logo from "../assets/whitelogo.svg";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import followinsta from "../assets/followinsta.svg";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

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
          </div>
          <p className="text-center lg:text-left">
            In the new era of technology, we look into the future with certainty
            and pride for our company and its innovations.
          </p>
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
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex justify-center gap-10 text-lg lg:text-base lg:justify-start lg:w-1/3">
          {/* Pages Links */}
          <div className="space-y-3">
            <p className="font-bold">Pages</p>
            {pages.map((item) => (
              <p key={item} className="hover:text-gray-400 cursor-pointer transition">
                {item}
              </p>
            ))}
          </div>

          {/* Utility Pages Links */}
          <div className="space-y-3">
            <p className="font-bold">Utility Pages</p>
            {utilityPages.map((item) => (
              <p key={item} className="hover:text-gray-400 cursor-pointer transition">
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
