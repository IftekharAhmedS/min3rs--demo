import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/min3rs-logo-sm.png";
import './Header.css'

const Header = () => {
  return (
    <div className="navbar text-[#C4C4C4] px-28 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to='/'>Item 1</Link>
            </li>
            <li tabIndex="0">
              <Link to='/' className="justify0-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link to='/'>Submenu 1</Link>
                </li>
                <li>
                  <Link to='/'>Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/'>Item 3</Link>
            </li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-[18px] font-[400]">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li tabIndex="0">
            <Link to='/'>Features</Link>
          </li>
          <li>
            <Link to='/'>Roadmap</Link>
          </li>
          <li>
            <Link to='/'>Team</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/' className="btn btn-ghost capitalize text-[18px] font-[400]">Mint</Link>
        <Link to='/' className="connect-wallet-btn capitalize text-[14px]">Connect Wallet</Link>
      </div>
    </div>
  );
};

export default Header;
