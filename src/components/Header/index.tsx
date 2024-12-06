import React from "react";
import style from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return <header className={style.header}>
    <div className={style.nameContainer}>
      <span className={style.name}>Pathfinders</span>
    </div>
    <div className={style.navSection}>
      <Link className={style.link} href="#about">About</Link>
      <Link className={style.link} href="#strategies">Strategies</Link>
      <Link className={style.link} href="#team">Team</Link>
    </div>
  </header>;
};

export default Header;
