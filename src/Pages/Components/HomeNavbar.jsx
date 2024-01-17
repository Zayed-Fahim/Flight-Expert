import React, { useState, useEffect } from "react";
import logo from "../../Assets/Logo/logo.png";
import Button from "../SmallComponents/Button/Button";
import { Link } from "react-router-dom";
import "../../CSS/navbar.css";

const HomeNavbar = () => {
  const [imageData, setImageData] = useState(null);
  const [animationClassLeft, setAnimationClassLeft] = useState("");
  const [animationClassRight, setAnimationClassRight] = useState("");
  useEffect(() => {
    setAnimationClassLeft("animate-nav-left");
    setAnimationClassRight("animate-nav-right");
    const cachedImageData = localStorage.getItem("logoImageData");
    if (cachedImageData) {
      setImageData(cachedImageData);
    } else {
      const img = new Image();
      img.onload = () => {
        setImageData(img.src);
        localStorage.setItem("logoImageData", img.src);
      };
      img.src = logo;
    }
  }, []);

  const buttonClassNames = `bg-[#EB1933] text-white py-[11px] px-5 border border-[#EB1933] rounded-md hover:bg-white hover:text-[#EB1933] transition-all duration-300 ${animationClassRight}`;

  return (
    <nav className="text-white flex justify-between items-center mx-[12px] lg:-mx-[2.5rem] 2xl:mx-[7.5rem] py-2">
      <Link to="/" className={`${animationClassLeft}`}>
        <img
          className="object-cover bg-blend-darken w-[200px] h-[50px]"
          src={imageData || logo}
          alt="flight-expert"
        />
      </Link>
      <Button
        buttonClassNames={buttonClassNames}
        text={"Sign in"}
        type={"button"}
      />
    </nav>
  );
};

export default HomeNavbar;
