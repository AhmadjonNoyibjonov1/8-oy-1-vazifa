import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../redux/languageSlice";
import { toggleTheme } from "../redux/themeSlice";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

function Header({ texts }) {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const location = useLocation();
  const currentPath = location.pathname;

  function handleLanguage(e) {
    dispatch(changeLanguage(e.target.value));
  }

  function handleChange() {
    dispatch(toggleTheme());
  }

  return (
    <header
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } w-full`}
    >
      <div className="container mx-auto w-[1200px] p-4 flex justify-between items-center">
        <div>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <nav className="space-x-4">
          <ul className="flex gap-8">
            <li>
              <a
                href="/"
                className={`${
                  currentPath === "/" ? "border-b-2 border-blue-500 bg-gray-200" : ""
                }`}
              >
                {texts.home}
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`${
                  currentPath === "/about" ? "border-b-2 border-blue-500 bg-gray-200" : ""
                }`}
              >
                {texts.about}
              </a>
            </li>
            <li>
              <a
                href="/products"
                className={`${
                  currentPath === "/products" ? "border-b-2 border-blue-500 bg-gray-200" : ""
                }`}
              >
                {texts.products}
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <select
            className="select select-bordered w-24 p-2 bg-transparent border border-gray-300 rounded-md"
            onChange={handleLanguage}
          >
            <option value="en">English</option>
            <option value="uz">Uzbek</option>
            <option value="ru">Russian</option>
          </select>

          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleChange}
              checked={isDarkMode}
            />

            <svg
              className={`swap-off h-7 w-7 fill-current bg-black rounded-[50%] ${
                isDarkMode ? "hidden" : "block"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 3V1M12 23v-2M4.22 4.22l-1.42-1.42M20.8 20.8l-1.42-1.42M1 12h2M23 12h2M4.22 19.78l-1.42 1.42M20.8 3.22l-1.42 1.42" />
            </svg>

            <svg
              className={`swap-on h-7 w-7 fill-current ${
                isDarkMode ? "block" : "hidden"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16z" />
            </svg>
          </label>

          <button className="px-4 py-2 rounded-[20px] bg-[#4A3AFF] text-white">
            {texts.clone}
          </button>
          <Link to="/products/save" className="flex items-center">
            <svg
              className={`h-7 w-7 fill-current ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7 4v2h10V4h-2v2H9V4H7zm10 4V6H7v2H5v12h2v-2h10v2h2V8h-2z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
