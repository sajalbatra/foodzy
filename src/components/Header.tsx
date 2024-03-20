import React, { useState } from 'react';
import { CiFacebook, CiPhone } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../assets/logo.svg";

export function Header() {
    const [activeItem, setActiveItem] = useState<string>('');
    const handleMenuItemClick = (itemName :string) => {
        setActiveItem(itemName);
    };

    return (
        <nav>
            <section className="bg-[#474747] text-xl flex justify-between text-white px-4 py-2">
                <div className="flex space-x-4 items-center ">
                    <div className='flex items-center gap-1 '><p><CiPhone /></p>(414)857-0097</div>
                    <div className='flex items-center gap-1 '><p className='mt-1.5'><MdOutlineEmail /></p>yummy@foodzy.com</div>
                </div>
                <div className="flex space-x-4">
                    <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                    <a href="https://facebook.com" aria-label="Facebook"><CiFacebook /></a>
                    <a href="https://twitter.com" aria-label="Twitter"><RiTwitterXFill /></a>
                </div>
            </section>
            
            <section className='flex justify-around mt-5'>
                <div className='flex space-x-5 text-[#474747] items-center'>
                    <img src={logo} alt="logo" />
                    <p className=' font-playfair text-4xl italic'>Foodzy</p>
                </div>
                <div className='flex gap-4 font-dmsans text-xl cursor-pointer items-center'>
                    {['Home', 'About', 'Menu', 'Pages', 'Contact'].map((item) => (
                        <p key={item} onClick={() => handleMenuItemClick(item)} 
                            className={`${activeItem === item ? 'border bg-[#DBDFD0] rounded-xl px-3 font-semibold' : 'border-none'}`}>
                            <a href={`/${item}`} target="_blank" rel="noopener noreferrer">{item}</a>
                        </p>
                    ))}
                </div>
                <button className='text-sm border border-[#2C2F24] rounded-3xl px-5 font-semibold'>Book A Table</button>
            </section>
        </nav>
    );
}
