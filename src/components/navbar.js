import React, {useState} from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import logo from "../assets/products/logo.jpg"
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src= {logo} width={85} height={50} ></img>
      </div>
      <div className="links">
      
        <Link to="/"> Shop </Link>
                <Link to="/cart">
          <ShoppingCart size={35} />
        </Link>
        <Link to="/about"> AboutUs </Link>
      </div>
    </div>
  );
};
