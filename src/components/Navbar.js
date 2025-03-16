import React from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "../App.css";
import { IconContext } from "react-icons";

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: "blue" }}>
        <div className="navbar">
          {SidebarData.map((item, index) => (
            <Link key={index} to={item.path} className={item.cName}>

              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
