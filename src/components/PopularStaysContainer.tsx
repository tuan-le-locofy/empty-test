import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HotelCardContainer1 from "./HotelCardContainer";
import HotelCardContainer from "./HotelCardContainer1";
import styles from "./PopularStaysContainer.module.css";

const PopularStaysContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <div className={styles.popularStaysTitle}>
          <b className={styles.popularStays1}>Popular Stays</b>
        </div>
        <button
          className={styles.viewAllStaysButton}
          onClick={onViewAllStaysButtonClick}
        >
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright2.svg"
          />
        </button>
      </div>
      <div className={styles.hotelCards}>
        <HotelCardContainer1
          roomDescription="/unsplashrlwe8f8anoc@2x.png"
          roomType="Entire bungalow"
          hotelName="Matterhorn Suites"
          roomPrice="$575/night"
          reviewCount="(60 reviews)"
          rating="4.9"
          roomImageUrl="/vector.svg"
          propGap="11px"
          propWidth="37.54%"
          propRight="62.46%"
        />
        <HotelCardContainer
          discoveryShoresImage="/unsplashtsn8bpopveo@2x.png"
          storyBeachfrontSuite="2-Story beachfront suite"
          discoveryShores="Discovery Shores"
          night="$360/night"
          prop="4.8"
          reviews="(116 reviews)"
          propBorder="1px solid var(--color-lavender)"
        />
        <HotelCardContainer1
          roomDescription="/unsplashrlwe8f8anoc1@2x.png"
          roomType="Single deluxe hut"
          hotelName="Arctic Hut "
          roomPrice="$420/night"
          reviewCount="(78 reviews)"
          rating="4.7"
          roomImageUrl="/vector1.svg"
          propFlex="1"
          propGap="5px"
          propWidth="37.61%"
          propRight="62.39%"
        />
        <HotelCardContainer
          discoveryShoresImage="/unsplashyqrybvxug5q@2x.png"
          storyBeachfrontSuite="Deluxe King Room"
          discoveryShores="Lake Louise Inn"
          night="$244/night"
          prop="4.6"
          reviews="(63 reviews)"
          propBorder="1px solid var(--color-lavender-100)"
        />
      </div>
      <div className={styles.mobileViewAllStays}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img className={styles.arrowRightIcon1} alt="" src="/arrowright2.svg" />
      </div>
    </div>
  );
};

export default PopularStaysContainer;
