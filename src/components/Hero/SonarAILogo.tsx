import Image from "next/image";
import style from "./SonarAILogo.module.css";

const SonarAILogo = () => {
  return (
    <div className={style.container}>
      <span className={style.name}>Sonar AI</span>
      <div className={style.logos}>
        <Image
          className={`${style.logo} ${style.cuLogo}`}
          src="/cu_logo.png"
          alt="CU Logo"
          width={192 * 0.5}
          height={184 * 0.5}
        />
        <Image
          className={`${style.logo} ${style.ciresLogo}`}
          src="/cires_logo.png"
          alt="CIRES Logo"
          width={300 * 0.35}
          height={150 * 0.35}
        />
        <Image
          className={`${style.logo} ${style.noaaLogo}`}
          src="/noaa_logo.png"
          alt="NOAA Logo"
          width={468 * 0.2}
          height={469 * 0.2}
        />
      </div>
    </div>
  );
};

export default SonarAILogo;
