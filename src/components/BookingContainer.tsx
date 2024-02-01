import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BookingContainer.module.css";

type BookingContainerType = {
  flightDetails?: string;
  airlineDetails?: string;
  flightPrice?: string;
  originAirportCode?: string;
  destinationAirportCode?: string;
  originCity?: string;
  destinationCity?: string;
  classType?: string;
  numberOfAdults?: string;
  bookingPlatform?: string;
  timeSinceBooking?: string;

  /** Style props */
  propTextAlign?: CSSProperties["textAlign"];
};

const BookingContainer: FunctionComponent<BookingContainerType> = ({
  flightDetails,
  airlineDetails,
  flightPrice,
  originAirportCode,
  destinationAirportCode,
  originCity,
  destinationCity,
  classType,
  numberOfAdults,
  bookingPlatform,
  timeSinceBooking,
  propTextAlign,
}) => {
  const arrNameStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className={styles.bookingCard}>
      <div className={styles.airlinePrice}>
        <div className={styles.airline}>
          <img className={styles.airlinelogoIcon} alt="" src={flightDetails} />
          <div className={styles.singaporeAirlines}>{airlineDetails}</div>
        </div>
        <div className={styles.price}>{flightPrice}</div>
      </div>
      <div className={styles.locations}>
        <div className={styles.departure}>
          <div className={styles.depcode}>{originAirportCode}</div>
          <div className={styles.depname}>{destinationAirportCode}</div>
        </div>
        <img className={styles.flightIcon} alt="" src="/flight-icon.svg" />
        <div className={styles.arrival}>
          <div className={styles.arrcode}>{originCity}</div>
          <div className={styles.arrname} style={arrNameStyle}>
            {destinationCity}
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.class}>
          <img className={styles.classIcon} alt="" src="/class-icon.svg" />
          <div className={styles.flightclass}>{classType}</div>
        </div>
        <div className={styles.calenderParent}>
          <img className={styles.calenderIcon} alt="" src="/calender.svg" />
          <div className={styles.numpeople}>{numberOfAdults}</div>
        </div>
      </div>
      <div className={styles.provider}>
        <div className={styles.provider1}>
          <span>{`Booked on `}</span>
          <span className={styles.expedia}>{bookingPlatform}</span>
        </div>
        <div className={styles.timeago}>{timeSinceBooking}</div>
      </div>
    </div>
  );
};

export default BookingContainer;
