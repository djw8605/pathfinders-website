import Link from "next/link";
import style from "./Strategies.module.css";

function awardLink(name: string, id: string) {
  return (
    <Link
      className={style.link}
      href={`https://www.nsf.gov/awardsearch/showAward?AWD_ID=${id}`}
    >
      {name}
    </Link>
  );
}

const Strategies = () => {
  return (
    <div id="strategies">
      <hr />
      <h2 className={style.header}>Pathfinder Strategies</h2>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <h3 className={style.title}>Hackathons</h3>
          <p className={style.text}>
            Annual, intense in-person meetings to tackle pressing technical
            topics across the collaboration. Builds on biweekly video
            conferences between scientists and experts.
          </p>
        </div>
        <div className={style.card}>
          <h3 className={style.title}>Expanding Partnerships</h3>
          <p className={style.text}>
            As the collaboration becomes more established, integrating more
            partners like the {awardLink("NDP", "2333609")},{" "}
            {awardLink("DeltaAI", "2320345")},{" "}
            {awardLink("Stampede3", "2320757")}, {awardLink("SAGE", "2331263")},
            and {awardLink("NSDF", "2138811")}.
          </p>
        </div>
        <div className={style.card}>
          <h3 className={style.title}>Joint Integrations</h3>
          <p className={style.text}>
            Co-developing software and integrations to ensure climate science
            tools can transparently access NDC-C cyberinfrastructure.
          </p>
        </div>
        <div className={style.card}>
          <h3 className={style.title}>Broader Impacts</h3>
          <p className={style.text}>
            With the {awardLink("MS-CC", "2234326")}, working to empower climate
            scientists at Jackson State University to have local access to NCAR
            data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Strategies;
