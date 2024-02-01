import { FunctionComponent } from "react";
import Pilldefault from "./Pilldefault";
import styles from "./LosAngelesContainer.module.css";

const LosAngelesContainer: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.banner}>
        <img
          className={styles.bannerBackground}
          alt=""
          src="/banner-background@2x.png"
        />
        <div className={styles.title}>
          <div className={styles.staysInLos}>Stays in Los Angeles</div>
          <div className={styles.options}>
            <Pilldefault
              beds="Recommended"
              pilldefaultPosition="unset"
              pilldefaultBackgroundColor="#fff"
              bedsColor="#1262af"
            />
            <Pilldefault
              beds="Price"
              pilldefaultPosition="unset"
              pilldefaultBackgroundColor="unset"
              bedsColor="#fff"
            />
            <Pilldefault
              beds="Rating"
              pilldefaultPosition="unset"
              pilldefaultBackgroundColor="unset"
              bedsColor="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LosAngelesContainer;
