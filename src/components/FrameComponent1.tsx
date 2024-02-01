import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.globalBrokerage}>
      <h1 className={styles.weAreA}>
        We are a global, boutique real estate brokerage
      </h1>
      <div className={styles.transferRE}>
        <div className={styles.bookFrame}>
          <div className={styles.subscribeFrame}>
            <div className={styles.stepsThreeMinsParent}>
              <div className={styles.stepsThreeMins}>
                <h1 className={styles.theTransferOf}>
                  The transfer of real estate
                </h1>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
                  pellentesque sollicitudin. Egestas faucibus lacus diam in
                  senectus consectetur. Mattis elit adipiscing quisque tellus
                  scelerisque vehicula ante nunc. Tellus consequat nisl quis
                  nisl justo.
                </div>
              </div>
              <div className={styles.customersFrame}>
                <button className={styles.readMoreButton}>
                  <div className={styles.bookNow}>Book Now!</div>
                </button>
                <button className={styles.readMoreButton1}>
                  <div className={styles.readMore}>Read More</div>
                </button>
              </div>
            </div>
            <div className={styles.customerGroups}>
              <div className={styles.parent}>
                <div className={styles.div}>12+</div>
                <div className={styles.customers}>Customers</div>
              </div>
              <div className={styles.group}>
                <div className={styles.div1}>14+</div>
                <div className={styles.officesWrapper}>
                  <div className={styles.offices}>Offices</div>
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.div2}>10+</div>
                <div className={styles.students}>Students</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-27@2x.png"
          />
          <div className={styles.frameItem} />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
