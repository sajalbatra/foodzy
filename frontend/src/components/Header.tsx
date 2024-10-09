import { useState } from "react";
import { CiFacebook, CiPhone } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export function Header() {
  const [activeItem, setActiveItem] = useState<string>("");
  const [toggle, setToggle] = useState(false);
  const handleMenuItemClick = (itemName: string,) => {
    setActiveItem(itemName);    
  };
  return (
    <>
      <nav className="Desktop-menu mobile:hidden bg-white sticky top-0 z-50">
        <section className="bg-[#474747] text-xl flex justify-between text-white px-4 py-2  ">
          <div className="flex items-center space-x-4 ">
            <div className="flex items-center gap-1 ">
              <p>
                <CiPhone />
              </p>
              (414)857-0097
            </div>
            <div className="flex items-center gap-1 ">
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
          <Link to="/">
          <div className="flex space-x-5 text-[#474747] items-center">
            <img src={logo} alt="logo" />
            <p className="text-4xl italic font-playfair">Foodzy</p>
          </div>
          </Link>
          <div className="flex items-center justify-center space-x-5">
            <div className="flex items-center space-x-4 text-xl cursor-pointer font-dmsans ">
              {["Home", "About", "Menu", "Pages", "User"].map((item) => (
                <p
                  key={item}
                  onClick={() => handleMenuItemClick(item)}
                  className={`${
                    activeItem === item
                      ? "border bg-[#DBDFD0] rounded-xl px-3 font-semibold justify-around"
                      : "border-none"
                  }`}
                >
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              </p>
              ))}
            </div>
            <button className="text-sm border border-[#2C2F24] rounded-3xl px-5 font-semibold h-10">
              Book A Table
            </button>
          </div>
        </section>
      </nav>

      <nav className="Mobile-menu lg-device:hidden sticky top-0 z-50">
        <section className="bg-[#474747] text-xl flex justify-between text-white px-4 py-2  ">
          <div className="flex items-center space-x-4 ">
            <div className="flex items-center gap-1 ">
              <a href="dail:(414)857-0097" className="text-white ">
                <CiPhone />
              </a>
            </div>
            <div className="flex items-center gap-1 ">
              <a className="" href="mailto:yummy@foodzy.com">
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
          {/* div of log only  */}
          <div className="flex justify-between text-[#474747] items-center">
          <Link to="/">
            <div className="flex space-x-5 text-[#474747] items-center ml-2">
              <img src={logo} alt="logo" />
              <p className="text-4xl italic font-playfair">Foodzy</p>
            </div>
            </Link>
            <GiHamburgerMenu
              className="flex justify-end mr-5 text-3xl cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
                console.log(toggle);
              }}
            />
          </div>
          {/* div of button and menu */}
          {toggle ? (
            <div className="z-10 flex flex-col max-w-[30%] gap-2 ml-[72%] overflow-x-hidden absolute bg-white/30 backdrop-blur-md">
              <div className="flex flex-col items-center text-xl cursor-pointer font-dmsans">
                {["Home", "About", "Menu", "Pages", "User"].map((item) => (
                  <p
                    key={item}
                    onClick={() => handleMenuItemClick(item)}
                    className={`${
                      activeItem === item
                        ? "border bg-[#DBDFD0] rounded-xl px-3 font-semibold justify-around"
                        : "border-none"
                    }`}
                  >
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                  </p>
                ))}
              </div>
              <button className="text-sm border border-[#2C2F24] rounded-3xl font-semibold px-1  ">
                Book A Table
              </button>
            </div>
            

          ) : null}
        </section>
      </nav>
    </>
  );
}
