import React from "react";
import style from "./PartnerList.module.css";
import Image from "next/image";
import SonarAILogo from "./SonarAILogo";

const PartnerList = () => {
  return (
    <div className={style.grid}>
      <div className={`${style.itemContainer} ${style.itemA}`}>
        <Image
          className={style.logo}
          src="/ncar_logo.png"
          alt="NCAR Logo"
          width={518 * 0.6}
          height={142 * 0.6}
        />
      </div>
      <div className={`${style.itemContainer} ${style.itemB}`}>
        <Image
          className={style.logo}
          src="/pism_logo.png"
          alt="PISM Logo"
          width={1000 * 0.28}
          height={332 * 0.28}
        />
      </div>
      <div className={`${style.itemContainer} ${style.itemC}`}>
        <Image
          className={style.logo}
          src="/fiu_logo.svg"
          alt="FIU Logo"
          width={221.7}
          height={102.8}
        />
      </div>
      <div className={`${style.itemContainer} ${style.itemD}`}>
        <SonarAILogo />
      </div>
      <div className={`${style.itemContainer} ${style.itemE}`}>
        <Image
          className={`${style.pelican} ${style.logo}`}
          src="/pelican_logo.png"
          alt="Pelican Logo"
          width={600 * 0.5}
          height={213 * 0.5}
        />
      </div>
    </div>
  );
};

export default PartnerList;
