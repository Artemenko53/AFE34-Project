import React from "react";
import logo from "../../img/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";
import classNames from "classnames";

const Header = () => {
  const getMenuLinkClass = ({ isActive }) =>
    classNames(css.navLink, { [css.active]: isActive });
  return (
    <header className={css.header}>
      <Link to="/">
        <img src={logo} alt="logo" width="56px" height="56px" />
      </Link>
      <NavLink to="/" className={getMenuLinkClass}>
        Chuck Jokes
      </NavLink>
      <NavLink to="/myPage" className={getMenuLinkClass}>
        My page
      </NavLink>
    </header>
  );
};

export default Header;
