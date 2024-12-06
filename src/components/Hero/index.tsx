import style from "./Hero.module.css";
import PartnerList from "./PartnerList";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={style.heroContainer} id="about">
      <div className={style.left}>
        <Image
          className={style.map}
          src="/pelican_concept_map.png"
          alt="Pelican Concept Map"
          width={1000 * 0.5}
          height={560 * 0.5}
        />
        <p className={style.tagline}>
          A collaboration between 5 projects, working to innovate science-led
          pathways through the NSF cyberinfrastructure landscape.
        </p>
      </div>
      <div className={style.right}>
        <PartnerList />
      </div>
    </div>
  );
};

export default Hero;
