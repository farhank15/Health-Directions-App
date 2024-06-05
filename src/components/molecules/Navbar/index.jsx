import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Beranda</a>
            </li>
            <li>
              <a href="about">Tentang Kami</a>
            </li>
            <li>
              <a>Fitur</a>
              <ul className="p-2">
                <li>
                  <a href="consul">Konsultasi Medis</a>
                </li>
                <li>
                  <a href="history">Riwayat Konsultasi</a>
                </li>
                <li>
                  <a href="recipe">Resep Obat</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="article">Artikel</a>
            </li>
          </ul>
        </div>
        <img className="logo w-12" src="src/assets/logo/logo.svg" />
        <a
          href="/"
          className="btn italic btn-ghost text-lg sm:text-2xl md:text-xl lg:text-3xl"
        >
          HealthDirection
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/" className="text-xl">
              Beranda
            </a>
          </li>
          <li>
            <a href="about" className="text-xl">
              Tentang Kami
            </a>
          </li>
          <li>
            <details>
              <summary className="text-xl">Fitur</summary>
              <ul className="p-2">
                <li>
                  <a href="consul">Konsultasi Medis</a>
                </li>
                <li>
                  <a href="history">Riwayat Konsultasi</a>
                </li>
                <li>
                  <a href="recipe">Resep Obat</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="article" className="text-xl">
              Artikel
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="login" className="btn mr-8 px-5 py-2">
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
