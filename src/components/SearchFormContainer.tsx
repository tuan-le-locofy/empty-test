import { FunctionComponent, useState } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./SearchFormContainer.module.css";

const SearchFormContainer: FunctionComponent = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.searchFormSection}>
        <div className={styles.searchContainer}>
          <div className={styles.bannerGradient} />
          <img
            className={styles.bannerBackgroundIcon}
            alt=""
            src="/banner-background1@2x.png"
          />
          <div className={styles.searchSection}>
            <div className={styles.title}>
              <div className={styles.whereAreYou}>Where are you off too?</div>
            </div>
            <div className={styles.searchForm}>
              <div className={styles.inputsRow}>
                <div className={styles.inputGroup}>
                  <Autocomplete
                    className={styles.departureField}
                    size="medium"
                    disablePortal
                    options={[
                      "Singapore (SIN)",
                      "Sydney (SYD)",
                      "Siem Reap (REP)",
                      "Shanghai (PVG)Sanya (SYX)",
                    ]}
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Departure"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue="Singapore -  Changi (SIN)"
                  />
                </div>
                <div className={styles.inputGroup1}>
                  <Autocomplete
                    className={styles.arrivalField}
                    size="medium"
                    sx={{ width: "100%" }}
                    disablePortal
                    options={[
                      "Clark (CRK)",
                      "Launceston (LST)",
                      "Kalibo (KLO)",
                      "Colombo CMB",
                      "Melbourne (AVV)",
                      "Los Angeles (LA)",
                    ]}
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Arrival"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue="Los Angeles (LA)"
                  />
                </div>
                <div className={styles.inputGroup2}>
                  <div className={styles.dateField}>
                    <DatePicker
                      label="Date"
                      value={dateFieldDateTimePickerValue}
                      onChange={(newValue: any) => {
                        setDateFieldDateTimePickerValue(newValue);
                      }}
                      sx={{}}
                      slotProps={{
                        textField: {
                          variant: "outlined",
                          size: "medium",
                          fullWidth: true,
                          required: false,
                          autoFocus: false,
                          error: false,
                          color: "primary",
                          placeholder: "Date",
                        },
                        openPickerIcon: {
                          component: () => <></>,
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.searchFlightsButton}>
                  <div className={styles.button}>Search flights</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchFormContainer;
