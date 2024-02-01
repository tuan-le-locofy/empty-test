import { FunctionComponent } from "react";
import DestinationContainer from "./DestinationContainer";
import styles from "./PopularDestinationsContainer.module.css";

const PopularDestinationsContainer: FunctionComponent = () => {
  return (
    <div className={styles.popDestinationsMain}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <b className={styles.planYourNext}>Plan your next trip</b>
          <b className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </b>
        </div>
        <button className={styles.viewAllTop}>
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
        </button>
      </div>
      <div className={styles.cardsContainer}>
        <DestinationContainer
          destinationPrice="/parisimage@2x.png"
          destinationName="Paris"
          destinationPriceRange="$699"
          propWidth="90.92px"
          propDisplay="inline-block"
          propWidth1="90.92px"
          propLeft="38.39px"
        />
        <DestinationContainer
          destinationPrice="/greeceimage@2x.png"
          destinationName="Greece"
          destinationPriceRange="$1079"
          propWidth="99.9px"
          propDisplay="inline-block"
          propWidth1="unset"
          propLeft="47.4px"
        />
        <DestinationContainer
          destinationPrice="/norwayimage@2x.png"
          destinationName="Norway"
          destinationPriceRange="$895"
          propWidth="90.9px"
          propDisplay="inline-block"
          propWidth1="90.9px"
          propLeft="38.4px"
        />
        <DestinationContainer
          destinationPrice="/tuscanyimage@2x.png"
          destinationName="Tuscany"
          destinationPriceRange="$1245"
          propWidth="100.6px"
          propDisplay="inline-block"
          propWidth1="100.6px"
          propLeft="48.1px"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img className={styles.arrowRightIcon1} alt="" src="/arrowright.svg" />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
