import { FunctionComponent } from "react";
import styles from "./Vuesaxlinearmessages.module.css";

const Vuesaxlinearmessages: FunctionComponent = () => {
  return (
    <div className={styles.vuesaxlinearmessages}>
      <img
        className={styles.vuesaxlinearmessagesIcon}
        loading="eager"
        alt=""
        src="/vuesaxlinearmessages1.svg"
      />
    </div>
  );
};

export default Vuesaxlinearmessages;
