import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import styles from "./HotelCardContainer1.module.css";

type HotelCardContainerType = {
  discoveryShoresImage?: string;
  storyBeachfrontSuite?: string;
  discoveryShores?: string;
  night?: string;
  prop?: string;
  reviews?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
};

const HotelCardContainer: FunctionComponent<HotelCardContainerType> = ({
  discoveryShoresImage,
  storyBeachfrontSuite,
  discoveryShores,
  night,
  prop,
  reviews,
  propBorder,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const moreDetailsButtonStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.hotelCard2}>
        <div className={styles.hotelCard}>
          <img
            className={styles.discoveryShoresImage}
            alt=""
            src={discoveryShoresImage}
          />
          <div className={styles.stayDetails}>
            <div className={styles.stayDetailsRows}>
              <div className={styles.storyBeachfrontSuite}>
                {storyBeachfrontSuite}
              </div>
              <b className={styles.discoveryShores}>{discoveryShores}</b>
              <div className={styles.night}>{night}</div>
            </div>
            <img
              className={styles.videoIcon}
              alt=""
              src="/video.svg"
              onClick={openMatterhornPopup}
            />
          </div>
          <div className={styles.rating}>
            <div className={styles.reviews}>{reviews}</div>
            <div className={styles.parent}>
              <div className={styles.div}>{prop}</div>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
          </div>
          <button
            className={styles.moreDetailsButton}
            style={moreDetailsButtonStyle}
          >
            <div className={styles.button}>More details</div>
          </button>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelCardContainer;
