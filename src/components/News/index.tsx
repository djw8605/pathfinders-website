import Image from "next/image";
import style from "./News.module.css";
import Link from "next/link";

const News = () => {
  return (
    <Link href={"https://pelicanplatform.org/user-stories/2024/06/13/noaa-on-the-ospool"}>
      <div className={style.wrapper}>
        <Image
          className={style.image}
          src="https://raw.githubusercontent.com/CHTC/Articles/main/images/noaa-banner.png"
          alt="News"
          width={420}
          height={210}
        />
        <div>
          <h3 className={style.title}>NOAA funded marine scientist uses OSPool access to high throughput computing to explode her boundaries of research</h3>
          <p className={style.text}>
            Dr. Carrie Wall, a research scientist at the University of Colorado Boulder,
            shares how access to OSPool resources has allowed her team to expand the scope
            of their research and to fail, unconstrained by the cost of computing in the
            cloud and the associated restraints that places on research.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default News;
