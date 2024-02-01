import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import VariantContainedSizeLarge from "./VariantContainedSizeLarge";
import styles from "./NewsletterFormContainer.module.css";

const NewsletterFormContainer: FunctionComponent = () => {
  return (
    <div className={styles.subscribeSection}>
      <img
        className={styles.subscribeSectionBackground}
        alt=""
        src="/subscribe-section-background@2x.png"
      />
      <div className={styles.shareYourTravelsForm}>
        <div className={styles.formHeader}>
          <b className={styles.formTitleSubtext}>subscribe to our newsletter</b>
          <b className={styles.formTitle}>Get weekly updates</b>
        </div>
        <div className={styles.form}>
          <div className={styles.formText}>
            <div className={styles.fillInYour}>
              Fill in your details to join the party!
            </div>
          </div>
          <div className={styles.formFields}>
            <div className={styles.destinationNameInput}>
              <TextField
                className={styles.input}
                color="primary"
                label="Your name"
                size="medium"
                variant="outlined"
                type="text"
                sx={{ "& .MuiInputBase-root": { height: "56px" } }}
              />
            </div>
            <div className={styles.nameInput}>
              <TextField
                className={styles.input1}
                color="primary"
                label="Email address"
                size="medium"
                variant="outlined"
                type="text"
                sx={{ "& .MuiInputBase-root": { height: "56px" } }}
              />
            </div>
          </div>
          <button className={styles.button}>
            <VariantContainedSizeLarge
              button="submit"
              variantContainedSizeLargePosition="unset"
              variantContainedSizeLargeBoxSizing="border-box"
              buttonColor="#fff"
              buttonDisplay="inline-block"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterFormContainer;
