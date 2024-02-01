import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.fickleflightBio}>
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
        <div className={styles.fickleFlightIs}>
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </div>
        <div className={styles.socialIcons}>
          <img
            className={styles.entypoSocialfacebookWithCiIcon}
            alt=""
            src="/entyposocialfacebookwithcircle.svg"
          />
          <img
            className={styles.entypoSocialtwitterWithCirIcon}
            alt=""
            src="/entyposocialtwitterwithcircle.svg"
          />
          <img
            className={styles.entypoSocialinstagramWithCIcon}
            alt=""
            src="/entyposocialinstagramwithcircle.svg"
          />
        </div>
      </div>
      <div className={styles.footerChild} />
      <div className={styles.footerLinks}>
        <div className={styles.company}>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.company1}>Company</div>
          <div className={styles.news}>News</div>
          <div className={styles.careers}>Careers</div>
          <div className={styles.howWeWork}>How we work</div>
        </div>
        <div className={styles.support}>
          <div className={styles.account}>Account</div>
          <div className={styles.support1}>Support</div>
          <div className={styles.supportCenter}>Support Center</div>
          <div className={styles.faq}>FAQ</div>
          <div className={styles.accessibility}>Accessibility</div>
        </div>
        <div className={styles.more}>
          <div className={styles.covidAdvisory}>Covid Advisory</div>
          <div className={styles.more1}>More</div>
          <div className={styles.airlineFees}>Airline Fees</div>
          <div className={styles.tips}>Tips</div>
          <div className={styles.quarantineRules}>Quarantine Rules</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
