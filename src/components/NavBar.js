import logo from "../assets/logo.png";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from "react";

function NavBar(){
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const handleMobileNav = () => {
        setMobileNavOpen(!isMobileNavOpen);
    }

    return (
        <>
        <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white px-4">
            {/* <img className="h-40 w-48" src={logo} alt="Roc Advisor - mountain outline"/> */}
            <h1 className="w-1/2 text-3xl font-bold text-yellow" > ROC ADVISORS.</h1>
            <ul className="hidden md:flex">
                <li className="p-4"> Value Proposition </li>
                <li className="p-4"> Solutions</li>
                <li className="p-4"> About</li>
                <li className="p-4"> Contact</li>
            </ul>
            <div onClick={handleMobileNav} className="block md:hidden">
                {!isMobileNavOpen ? <AiOutlineClose size={25} className="text-yellow cursor-pointer" /> : <AiOutlineMenu size={25} className="text-yellow cursor-pointer" />}
            </div>
            <nav className={!isMobileNavOpen ? "fixed left-0 top-0 w-[50%] border-r border-r-slate-light h-full ease-in-out duration-500" : "fixed left-[-100%]"}>
                <ul className="pt-24 p-4 uppercase">
                    <li className="p-4 border-b border-slate-light"> Value Proposition </li>
                    <li className="p-4 border-b border-slate-light"> Solutions</li>
                    <li className="p-4 border-b border-slate-light"> About</li>
                    <li className="p-4 border-b border-slate-light"> Contact</li>
                </ul>
            </nav>
        </nav>
        </>
    );
};

export default NavBar;