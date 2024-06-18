import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 right-0 z-50 navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/about">Tentang Kami</Link>
            </li>
            <li>
              <span>Fitur</span>
              <ul className="p-2">
                <li>
                  <Link to="/konsultasi-medis">Konsultasi Medis</Link>
                </li>
                <li>
                  <Link to="/history">Riwayat Konsultasi</Link>
                </li>
                <li>
                  <Link to="/recipe">Resep Obat</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/article">Artikel</Link>
            </li>
          </ul>
        </div>
        <img className="w-12 logo" src="src/assets/logo/logo.svg" alt="Logo" />
        <Link
          to="/"
          className="text-lg italic btn btn-ghost sm:text-2xl md:text-xl lg:text-3xl"
        >
          HealthDirection
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link to="/" className="text-xl">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-xl">
              Tentang Kami
            </Link>
          </li>
          <li>
            <details>
              <summary className="text-xl">Fitur</summary>
              <ul className="p-2 w-52">
                <li>
                  <Link to="/konsultasi-medis">Konsultasi Medis</Link>
                </li>
                <li>
                  <Link to="/history">Riwayat Konsultasi</Link>
                </li>
                <li>
                  <Link to="/recipe">Resep Obat</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/article" className="text-xl">
              Artikel
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="px-5 py-2 mr-8 btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
