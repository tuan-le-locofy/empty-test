import { FunctionComponent } from "react";
import FlightContainer from "./FlightContainer";
import PrimaryButton from "./PrimaryButton";
import styles from "./FlightCardsContainer.module.css";

const FlightCardsContainer: FunctionComponent = () => {
  return (
    <div className={styles.flightCards}>
      <div className={styles.results}>10 out of 177 Results</div>
      <FlightContainer
        flightDetails="/turkish.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 1-stop"
        arrivalTime="4:45 PM"
        flightPrice="S$ 723"
      />
      <FlightContainer
        flightDetails="/sia.svg"
        airlineName="Singapore Airlines"
        departureTime="8:45 PM"
        flightDuration="15H 10M, 2-stops"
        arrivalTime="7:55 PM"
        flightPrice="S$ 900"
        propTransform="unset"
      />
      <FlightContainer
        flightDetails="/japan.svg"
        airlineName="Japan Airlines"
        departureTime="8:20 PM"
        flightDuration="17H 30M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 859"
        propTransform="scale(0.8)"
      />
      <FlightContainer
        flightDetails="/ana.svg"
        airlineName="ANA"
        departureTime="6:35 PM"
        flightDuration="19H 15M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 936"
        propTransform="scale(0.8)"
      />
      <FlightContainer
        flightDetails="/americanairlines.svg"
        airlineName="American Airlines"
        departureTime="8:20 PM"
        flightDuration="17H 30M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 936"
        propTransform="unset"
      />
      <FlightContainer
        flightDetails="/turkish.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 1-stop"
        arrivalTime="4:45 PM"
        flightPrice="S$ 673"
        propTransform="unset"
      />
      <FlightContainer
        flightDetails="/japan.svg"
        airlineName="Japan Airlines"
        departureTime="10:25 PM"
        flightDuration="26H 45M, 1-stop"
        arrivalTime="9:10 AM"
        flightPrice="S$ 859"
        propTransform="scale(0.8)"
      />
      <PrimaryButton
        searchFlights="Show more results"
        primaryButtonPosition="relative"
        primaryButtonWidth="220px"
        primaryButtonHeight="72px"
        primaryButtonCursor="unset"
        primaryButtonBorder="unset"
        primaryButtonPadding="unset"
        primaryButtonBackgroundColor="unset"
        primaryButtonTop="unset"
        primaryButtonLeft="unset"
        rectangleDivBackgroundColor="#1262af"
        searchFlightsLeft="calc(50% - 81.5px)"
        searchFlightsDisplay="inline-block"
      />
    </div>
  );
};

export default FlightCardsContainer;
