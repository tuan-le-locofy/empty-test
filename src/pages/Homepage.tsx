import { FunctionComponent } from "react";
import HeroContainer from "../components/HeroContainer";
import UpcomingFlightSectionContainer from "../components/UpcomingFlightSectionContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysContainer from "../components/PopularStaysContainer";
import WeeklyUpdatesContainer from "../components/WeeklyUpdatesContainer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <HeroContainer />
      <div className={styles.homeContents}>
        <UpcomingFlightSectionContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysContainer />
      </div>
      <WeeklyUpdatesContainer
        imageDimensions="/subscribe-section-background@2x.png"
        imageId="/logo.svg"
        imageSize="130x30x677647826"
      />
    </div>
  );
};

export default Homepage;
