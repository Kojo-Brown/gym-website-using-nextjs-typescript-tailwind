import Link from "next/link";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [servicesDropdown, setServicesDropdown] = useState<boolean>(false);
  const [pricingDropdown, setPricingDropdown] = useState<boolean>(false);
  const [menuDropdown, setMenuDropdown] = useState<boolean>(false);

  return (
    <nav className="xl:flex justify-between items-center py-4 px-4 sm:flex">
      <h1 className="text-orange-600 text-3xl">Fitup</h1>

      <div className="flex gap-20">
        <ul className="relative xl:flex items-center gap-10 sm:hidden">
          <Link href="/">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="/services">
            <a>
              <li
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="relative flex items-center"
              >
                Services <BiChevronDown color="orange" />
                {servicesDropdown && (
                  <ul className="absolute top-8 right-5 w-20 bg-orange-500 px-3 py-1 rounded-md">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                  </ul>
                )}
              </li>
            </a>
          </Link>
          <li className="flex items-center z-999">Pricing</li>
          <li>Contact</li>
        </ul>

        <div className="relative flex items-center gap-16">
          <div className="lg:flex items-center gap-5 md:flex sm:hidden">
            <button>Login</button>
            <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700">
              Sign Up
            </button>
          </div>
          <button
            onClick={() => setMenuDropdown(!menuDropdown)}
            className="bg-slate-900 rounded-md p-2 xl:hidden lg:block"
          >
            <FiMenu color="white" size="1rem" />
            {menuDropdown && (
              <ul className="absolute top-10 right-0 w-32 mt-2 bg-orange-200 px-3 py-1 rounded-md">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Pricing</li>
                <li>Contact</li>
              </ul>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
