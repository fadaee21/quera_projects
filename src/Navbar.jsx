/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { LanguageContext } from "./context";

export default function Navbar() {

  const { lang, handleLangFar, handleLangEng } = useContext(LanguageContext)

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link" href="#">
          {lang.home}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {lang.events}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {lang.aboutUs}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {lang.contactUs}
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
        >
          {lang.language}
        </a>
        <ul className="dropdown-menu">
          <li className="nav-item">
            <a onClick={handleLangEng} className="dropdown-item" href="#">
              فارسی
            </a></li>
          <li className="nav-item">
            <a onClick={handleLangFar} className="dropdown-item" href="#">
              English</a></li></ul></li></ul>
  );
}
