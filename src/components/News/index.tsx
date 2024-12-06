import Image from "next/image";
import style from "./News.module.css";

const News = () => {
  return (
    <div className={style.wrapper}>
      <Image
        className={style.image}
        src="https://raw.githubusercontent.com/CHTC/Articles/main/images/wright/wright-computer.jpg"
        alt="News"
        width={420}
        height={210}
      />
      <div>
        <h3 className={style.title}>Erik Wright: A Biologist Using High Throughput Computing to Unravel Antibiotic Resistance</h3>
        <p className={style.text}>
          In his quest to analyze antibiotic resistance,researcher Erik Wright
          has relied on capacity from the Open Science Pool (OSPool) for over
          twelve years, this Fall surpassing 25 million jobs over the last 12
          months alone.
        </p>
      </div>
    </div>
  );
};

export default News;
