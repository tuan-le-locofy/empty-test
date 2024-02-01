import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent2.module.css";

type GroupComponent2Type = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propWidth1?: CSSProperties["width"];
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  propWidth,
  propPadding,
  propWidth1,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.frameChild} style={rectangleDiv1Style} />
      <div className={styles.enterYourEmail}>Enter your email</div>
      <button className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.getAQuote}>Get a Quote</div>
      </button>
    </div>
  );
};

export default GroupComponent2;
