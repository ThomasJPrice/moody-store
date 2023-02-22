import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import './Navbar.css'

import { RxPerson, RxMagnifyingGlass } from 'react-icons/rx'
import { RiShoppingBasketLine } from 'react-icons/ri'
import { SlHeart } from 'react-icons/sl'

const Navbar = () => {
  const [navLinks, setNavLinks] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "navLinks"]|order(orderRank){
      title,
      link,
    }`
      )
      .then((data) => setNavLinks(data))
      .catch(console.error);
  }, []);


  return (
    <div className="wrapper nav-wrapper">
      <nav className="container nav-container">
        <div className="nav-top">
          <h2 className="nav-logo">Moody Studio</h2>

          <ul className="nav-top-links">
            <li><RxMagnifyingGlass className="nav-link-icon" /></li>
            <li><RxPerson className="nav-link-icon" /></li>
            <li><RiShoppingBasketLine className="nav-link-icon" /></li>
            <li><SlHeart className="nav-link-icon" /></li>
          </ul>
        </div>

        <div className="nav-border" />

        <div className="nav-links">
          <ul className="nav-links-list">
            {navLinks ?
              navLinks.map((navLink, index) => (
                <a className="nav-link body-text" key={index} href={navLink.link}>{navLink.title}</a>
              ))
              : ''}
          </ul>
        </div>

        <div className="nav-border" />
      </nav>
    </div>
  )
}

export default Navbar