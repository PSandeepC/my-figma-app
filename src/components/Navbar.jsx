import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ()=> {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0  h-14 bg-transparent flex   items-center justify-between px-6 md:px-20 z-50">
      <h1 className="absolute text-[#25282B]    font-[Comfortaa] w-[130px] h-[32px] left-[120px] top-[12px] font-bold text-[18px] leading-[180%]">
        Madelyn Torff
      </h1>
      <nav className="hidden md:flex absolute flex-row items-start   gap-[48px] right-[120px] top-[14px]">
        <NavItem label="About" to="/about" />
        <NavItem label="Projects" to="/projects" />
        <NavItem label="Contacts" to="/contact" />
      </nav>

      <div
        className="md:hidden  absolute right-6 top-[10px] cursor-pointer z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} color="#25282B" /> :  <Menu size={28} color="#25282B" />}
      </div>

      {menuOpen && (
        <div className="absolute   top-14 right-0 bg-white w-full flex flex-col items-center gap-4 py-6 shadow-md md:hidden">
          <NavItem label="About" to="/about" />
          <NavItem label="Projects" to="/projects" />
          <NavItem label="Contacts" to="/contact" />
        </div>
      )}
    </header>
  );
}

const NavItem = ({ label, to })=> {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col  items-start gap-[2px] font-[Raleway]  text-[18px] leading-[28px] text-[#25282B] ${
          isActive ? "font-medium" : "font-normal"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span>{label}</span>
          <div
            className={`w-full  h-[2px] rounded-[2px] ${
              isActive ? "bg-[#25282B]" : "bg-transparent"
            }`}
          ></div>
        </>
      )}
    </NavLink>
  );
}
export default Navbar;