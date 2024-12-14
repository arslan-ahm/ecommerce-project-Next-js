import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center py-4 px-12">
        <Link href='/' className="text-2xl font-bold">MyStore</Link>
        <ul className="flex space-x-4">
          <NavItem href='/'>Home</NavItem>
          <NavItem href='/product'>Products</NavItem>
          <NavItem href='/about'>About</NavItem>
          <NavItem href='/contact'>Contact</NavItem>
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ href, children }) => {
  return (
    <li>
      <Link href={href} className="text-gray-300 hover:font-semibold">
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
