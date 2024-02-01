import { FunctionComponent, useCallback } from "react";
import RecentSearchesContainer from "./RecentSearchesContainer";
import { useNavigate } from "react-router-dom";
import styles from "./UpcomingFlightSectionContainer.module.css";

const UpcomingFlightSectionContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHotelClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className={styles.upcomingFlightSection}>
      <div className={styles.upcomingFlightSection1}>
        <b className={styles.recentSearches}>Recent Searches</b>
        <div className={styles.flightDetails}>
          <div className={styles.recentSearches1}>
            <RecentSearchesContainer
              flightOrigin="SIN"
              flightDestination="/duration.svg"
              flightOriginCode="LAX"
              departureDate="Depart on: "
              returnDate="7 Sep 2021"
            />
            <RecentSearchesContainer
              flightOrigin="MY"
              flightDestination="/duration.svg"
              flightOriginCode="DUB"
              departureDate="Depart on:"
              returnDate=" 9 Sep 2021"
            />
          </div>
          <div className={styles.prepareMenu}>
            <div className={styles.prepareForYour}>Prepare for your trip</div>
            <div className={styles.tripMenus}>
              <button className={styles.hotel} onClick={onHotelClick}>
                <img
                  className={styles.hotelIcon}
                  alt=""
                  src="/hotel-icon.svg"
                />
                <div className={styles.hotel1}>Hotel</div>
              </button>
              <button className={styles.attractions}>
                <div className={styles.attractionsIcon}>
                  <div className={styles.background} />
                  <img className={styles.ticketIcon} alt="" src="/ticket.svg" />
                </div>
                <div className={styles.attractions1}>Attractions</div>
              </button>
              <button className={styles.eats}>
                <img className={styles.eatsIcon} alt="" src="/eats-icon.svg" />
                <div className={styles.eats1}>Eats</div>
              </button>
              <button className={styles.commute}>
                <div className={styles.commuteIcon}>
                  <div className={styles.background1} />
                  <img className={styles.trainIcon} alt="" src="/train.svg" />
                </div>
                <div className={styles.commute1}>Commute</div>
              </button>
              <button className={styles.taxi}>
                <div className={styles.taxiIcon}>
                  <div className={styles.background2} />
                  <img className={styles.taxiIcon1} alt="" src="/taxi.svg" />
                </div>
                <div className={styles.taxi1}>Taxi</div>
              </button>
              <button className={styles.movies}>
                <div className={styles.moviesIcon}>
                  <div className={styles.background3} />
                  <img className={styles.movieIcon} alt="" src="/movie.svg" />
                </div>
                <div className={styles.movies1}>Movies</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFlightSectionContainer;
