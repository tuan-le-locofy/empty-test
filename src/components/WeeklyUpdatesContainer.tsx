import { FunctionComponent } from "react";
import NewsletterFormContainer from "./NewsletterFormContainer";
import Footer from "./Footer";
import styles from "./WeeklyUpdatesContainer.module.css";

type WeeklyUpdatesContainerType = {
  imageDimensions?: string;
  imageId?: string;
  imageSize?: string;
};

const WeeklyUpdatesContainer: FunctionComponent<WeeklyUpdatesContainerType> = ({
  imageDimensions,
  imageId,
  imageSize,
}) => {
  return (
    <div className={styles.footerSection}>
      <NewsletterFormContainer />
      <Footer />
    </div>
  );
};

export default WeeklyUpdatesContainer;
