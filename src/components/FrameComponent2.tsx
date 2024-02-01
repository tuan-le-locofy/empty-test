import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.starRatingGroup}>
      <div className={styles.bestProjectOf}>Best Project of the Years</div>
      <div className={styles.recentProjectsGroup}>
        <div className={styles.sobhaHearlandVillas}>
          <h1 className={styles.ourRecentProjects}>Our recent projects</h1>
          <div className={styles.customersStudentsGroup}>
            <img
              className={styles.customersStudentsGroupChild}
              loading="eager"
              alt=""
              src="/group-10.svg"
            />
            <div className={styles.wrapperGroup11}>
              <img
                className={styles.wrapperGroup11Child}
                loading="eager"
                alt=""
                src="/group-11.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.subscribeNewsletterFrame}>
          <div className={styles.getQuoteButtonParent}>
            <div className={styles.getQuoteButton} />
            <img
              className={styles.renderingIsometricBox}
              loading="eager"
              alt=""
              src="/rectangle-19@2x.png"
            />
            <div className={styles.helpText}>
              <div className={styles.questionMarkIcon}>
                <div className={styles.sobhaHearlandIi}>
                  Sobha Hearland II Villas
                </div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
                  bibendum.
                </div>
                <div className={styles.emptyStar}>
                  <div className={styles.stars}>
                    <img
                      className={styles.starinactivebigIcon}
                      loading="eager"
                      alt=""
                      src="/starinactivebig.svg"
                    />
                    <img
                      className={styles.starinactivebigIcon1}
                      loading="eager"
                      alt=""
                      src="/starinactivebig-1.svg"
                    />
                    <img
                      className={styles.starinactivebigIcon2}
                      loading="eager"
                      alt=""
                      src="/starinactivebig-2.svg"
                    />
                    <img
                      className={styles.starinactivebigIcon3}
                      loading="eager"
                      alt=""
                      src="/starinactivebig-3.svg"
                    />
                    <img
                      className={styles.starinactivebigIcon4}
                      loading="eager"
                      alt=""
                      src="/starinactivebig-4.svg"
                    />
                  </div>
                  <div className={styles.div}>4.83</div>
                </div>
              </div>
            </div>
          </div>
          <GroupComponent
            rectangle20="/rectangle-20@2x.png"
            propBackgroundImage="url('pending_loco-0001-s2-46:181')"
          />
          <GroupComponent
            rectangle20="/rectangle-21@2x.png"
            propBackgroundImage="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
