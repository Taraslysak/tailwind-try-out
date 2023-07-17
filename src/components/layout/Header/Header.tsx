import React from "react";
import Burger from "../../../assets/burger.svg";
export function Header() {
  return (
    <div className=" h-50 bg-red-400 flex flex-row">
      <div className="p-1">
        <img src={Burger} alt="burger_btn" className="w-8 h-8" />
      </div>
      <div className="title">Title</div>
      <div className="home">Home Link</div>
      <div className="career">Careers link</div>
      <div className="about">About link</div>
      <div className="dropdown">'Dropdown logout'</div>
    </div>
  );
}
