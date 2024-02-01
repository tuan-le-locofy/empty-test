import { FunctionComponent } from "react";
import styles from "./Logo.module.css";

const Logo: FunctionComponent = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <img
          className={styles.frameInner}
          loading="eager"
          alt=""
          src="/rectangle-12.svg"
        />
      </div>
      <div className={styles.buildArea}>
        <img
          className={styles.buildIcon}
          loading="eager"
          alt=""
          src="/build.svg"
        />
      </div>
    </div>
  );
};

export default Logo;
