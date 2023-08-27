import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Header() {
  const menuItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
  ];
  return (
    <div className="flex  shadow h-24 justify-center">
      <div className="flex gap-5 container justify-between items-center">
        <div className="bg-primary-50">CCT</div>
        <ul className="flex gap-10 txt-bold text-xl">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <button>Contact </button>
      </div>
    </div>
  );
}

export default Header;
