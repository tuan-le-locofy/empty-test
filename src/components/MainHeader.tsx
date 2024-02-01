import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainHeader.module.css";

const MainHeader: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFickleflightLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className={styles.topHeader}>
      <div className={styles.topContainer}>
        <button
          className={styles.fickleflightLogo}
          onClick={onFickleflightLogoClick}
        >
          <img className={styles.symbolsIcon} alt="" src="/symbols.svg" />
        </button>
        <div className={styles.navigationRight}>
          <div className={styles.navigationMenu}>
            <button className={styles.search}>Search</button>
            <button className={styles.offers}>Offers</button>
          </div>
          <div className={styles.accountSection}>
            <img
              className={styles.hamburgerMenuIcon}
              alt=""
              src="/notification.svg"
            />
            <img
              className={styles.notificationBellIcon}
              alt=""
              src="/notification1.svg"
            />
            <img
              className={styles.unsplashd1upkifd04aIcon}
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
