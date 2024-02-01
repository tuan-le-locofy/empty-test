import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <header className={styles.frameProjects}>
      <div className={styles.frameProjectsChild} />
      <div className={styles.frameAgents}>
        <div className={styles.logo}>
          <div className={styles.groupHeaderParent}>
            <div className={styles.groupHeader} />
            <div className={styles.frameChild} />
            <img
              className={styles.frameItem}
              loading="eager"
              alt=""
              src="/rectangle-12.svg"
            />
          </div>
          <div className={styles.frameListing}>
            <img
              className={styles.buildIcon}
              loading="eager"
              alt=""
              src="/build.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.searchBar}>
        <div className={styles.searchBarChild} />
        <div className={styles.aboutUs}>About us</div>
        <div className={styles.projects}>Projects</div>
        <div className={styles.agents}>Agents</div>
        <div className={styles.services}>Services</div>
        <div className={styles.listings}>Listings</div>
        <img
          className={styles.vuesaxlinearsearchNormalIcon}
          loading="eager"
          alt=""
          src="/vuesaxlinearsearchnormal.svg"
        />
      </div>
      <div className={styles.contactUsFrame}>
        <div className={styles.groupWelcomeText}>
          <div className={styles.manageYourProperty}>
            <div className={styles.otherServices}>Other services</div>
            <input className={styles.vuesaxlineararrowRight} type="checkbox" />
          </div>
        </div>
        <button className={styles.enterEmail}>
          <div className={styles.contactUs}>Contact us</div>
        </button>
      </div>
    </header>
  );
};

export default FrameComponent5;
