import { useState } from "react";
import { CiFacebook, CiPhone } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

export function Header() {
  const [activeItem, setActiveItem] = useState<string>("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleMenuItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  const handleLogoClick = () => {
    navigate("/"); // Redirect to the homepage when logo is clicked
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="Desktop-menu mobile:hidden bg-white/60 backdrop-blur-md sticky top-0 z-50">
        <section className="bg-[#474747] text-xl flex justify-between text-white px-4 py-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-1">
              <p>
                <CiPhone />
              </p>
              (414) 857-0097
            </div>
            <div className="flex items-center gap-1">
              <p className="mt-1.5">
                <MdOutlineEmail />
              </p>
              yummy@foodzy.com
            </div>
          </div>
          <div className="flex space-x-4">
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
        </section>

        <section className="flex justify-around mt-5">
          <div
            onClick={handleLogoClick}
            className="flex space-x-5 text-[#474747] items-center cursor-pointer"
          >
            <img src={logo} alt="logo" />
            <p className="text-4xl italic font-playfair">Foodzy</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <div className="flex items-center space-x-4 text-xl cursor-pointer font-dmsans">
              {["Home", "About", "Menu", "Pages", "User"].map((item) => (
                <p
                  key={item}
                  onClick={() => handleMenuItemClick(item)}
                  className={`${
                    activeItem === item
                      ? "border bg-[#DBDFD0] rounded-xl px-3 font-semibold justify-around"
                      : "border-none"
                  } hover:text-[#2C2F24] transition duration-200`}
                >
                  <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                </p>
              ))}
            </div>
            <button className="text-sm border border-[#2C2F24] rounded-3xl px-5 font-semibold h-10 hover:bg-[#2C2F24] hover:text-white transition duration-200">
              Book A Table
            </button>
          </div>
        </section>
      </nav>

      {/* Mobile Menu */}
      <nav className="Mobile-menu lg-device:hidden bg-white/60 backdrop-blur-md">
        <section className="bg-[#474747] text-xl flex justify-between text-white px-4 py-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-1">
              <a href="tel:(414)857-0097" className="text-white">
                <CiPhone />
              </a>
            </div>
            <div className="flex items-center gap-1">
              <a href="mailto:yummy@foodzy.com">
                <MdOutlineEmail />
              </a>
            </div>
          </div>
          <div className="flex space-x-4">
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
        </section>

        <section className="mt-5">
          {/* Logo Section */}
          <div
            onClick={handleLogoClick}
            className="flex justify-between text-[#474747] items-center ml-2 cursor-pointer"
          >
            <img src={logo} alt="logo" />
            <p className="text-4xl italic font-playfair">Foodzy</p>
          </div>
          <GiHamburgerMenu
            className="flex justify-end mr-5 text-3xl cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </section>

        {/* Toggleable Menu */}
        {toggle && (
          <div className="z-10 flex flex-col max-w-[30%] gap-2 ml-[72%] absolute bg-white/70 backdrop-blur-md shadow-lg">
            <div className="flex flex-col items-center text-xl cursor-pointer font-dmsans py-2">
              {["Home", "About", "Menu", "Pages", "User"].map((item) => (
                <p
                  key={item}
                  onClick={() => handleMenuItemClick(item)}
                  className={`${
                    activeItem === item
                      ? "border bg-[#DBDFD0] rounded-xl px-3 font-semibold justify-around"
                      : "border-none"
                  } hover:text-[#2C2F24] transition duration-200`}
                >
                  <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                </p>
              ))}
            </div>
            // In src/components/Header.tsx

<button className="text-sm border border-[#2C2F24] rounded-3xl px-5 font-semibold h-10 hover:bg-[#2C2F24] hover:text-white transition duration-200">
  <Link to="/book-a-table">Book A Table</Link> {/* Update the button to link to BookTable */}
</button>

          </div>
        )}
      </nav>
    </>
  );
}
