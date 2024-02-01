import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import SearchFormContainer from "../components/SearchFormContainer";
import SearchFilterContainer from "../components/SearchFilterContainer";
import FlightCardsContainer from "../components/FlightCardsContainer";
import BookingContainer from "../components/BookingContainer";
import NewsletterContainer from "../components/NewsletterContainer";
import styles from "./ResultsPage.module.css";

const ResultsPage: FunctionComponent = () => {
  return (
    <div className={styles.resultsPage}>
      <MainHeader />
      <SearchFormContainer />
      <div className={styles.searchResults}>
        <SearchFilterContainer />
        <div className={styles.resultsSection}>
          <FlightCardsContainer />
          <div className={styles.recentlyBooked}>
            <div className={styles.recentlyBookedTitle}>
              <b className={styles.results}>Recently booked</b>
              <img
                className={styles.recentlyBookedTitleChild}
                alt=""
                src="/vector-21.svg"
              />
            </div>
            <div className={styles.bookingCards}>
              <BookingContainer
                flightDetails="/icon.svg"
                airlineDetails="Singapore Airlines"
                flightPrice="$1128"
                originAirportCode="SIN"
                destinationAirportCode="Singapore"
                originCity="LAX"
                destinationCity="Los Angeles"
                classType="Economy"
                numberOfAdults="2 Adults"
                bookingPlatform="Expedia"
                timeSinceBooking="1s ago!"
                propTextAlign="right"
              />
              <BookingContainer
                flightDetails="/icon1.svg"
                airlineDetails="American Airlines"
                flightPrice="$1024"
                originAirportCode="SFO"
                destinationAirportCode="San Francisco"
                originCity="SIN"
                destinationCity="Singapore"
                classType="First Class"
                numberOfAdults="1 Adults"
                bookingPlatform="Kayak"
                timeSinceBooking="2s ago!"
                propTextAlign="right"
              />
              <BookingContainer
                flightDetails="/icon2.svg"
                airlineDetails="Japan Airlines"
                flightPrice="$2996"
                originAirportCode="PHX"
                destinationAirportCode="Phoenix"
                originCity="DXB"
                destinationCity="Dubai"
                classType="Economy"
                numberOfAdults="3 Adults"
                bookingPlatform="Skyscanner"
                timeSinceBooking="3s ago!"
                propTextAlign="left"
              />
              <div className={styles.showMore}>
                <div className={styles.showMore1}>Show more</div>
                <img
                  className={styles.iconBack}
                  alt=""
                  src="/icon--back@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsletterContainer />
    </div>
  );
};

export default ResultsPage;
