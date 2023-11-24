import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export default function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <>
      <section className="section-header">
        <div className="logo">
          <img src="./logo.svg" alt="website logo" />
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#">Features</a>
            </li>
            <li className="nav-item">
              <a href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a href="#">Resources</a>
            </li>
          </ul>
        </nav>

        <div className="auth">
          <a href="#" className="auth-login">
            Login
          </a>
          <a href="#" className="auth-signup">
            Sign Up
          </a>
        </div>

        <div
          className="hamburger-menu"
          onClick={() => setIsOpenNav((isOpenNav) => !isOpenNav)}
        >
          {isOpenNav ? <IoCloseSharp /> : <FaBars />}
        </div>
      </section>

      {isOpenNav && (
        <div className="dropdown-menu">
          <nav className="dropdown-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#">Features</a>
              </li>
              <li className="nav-item">
                <a href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a href="#">Resources</a>
              </li>
            </ul>
          </nav>
          <div className="dropdown-auth">
            <a href="#" className="auth-login">
              Login
            </a>
            <a href="#" className="auth-signup">
              Sign Up
            </a>
          </div>
        </div>
      )}
    </>
  );
}
