import { FunctionComponent, useState, useCallback } from "react";
import {
  Radio,
  FormControlLabel,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import styles from "./SearchSection.module.css";

const SearchSection: FunctionComponent = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);
  const navigate = useNavigate();

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.searchSection}>
        <div className={styles.bannerGradient} />
        <img
          className={styles.bannerBackground}
          alt=""
          src="/banner--background@2x.png"
        />
        <div className={styles.searchContainer}>
          <div className={styles.title}>
            <div
              className={styles.letsExplore}
            >{`Let’s explore & travel the world`}</div>
            <div className={styles.findTheBest}>
              Find the best destinations and the most popular stays!
            </div>
          </div>
          <div className={styles.searchForm}>
            <div className={styles.formTitleGroup}>
              <b className={styles.searchFlights}>Search flights</b>
              <div className={styles.flightOptions}>
                <div className={styles.flightType}>
                  <FormControlLabel
                    className={styles.radio}
                    label="Return"
                    labelPlacement="end"
                    control={<Radio size="medium" />}
                  />
                  <FormControlLabel
                    className={styles.radio1}
                    label="One-way"
                    labelPlacement="end"
                    control={<Radio color="primary" checked size="medium" />}
                  />
                </div>
              </div>
            </div>
            <div className={styles.formInputsRow}>
              <div className={styles.inputsRow}>
                <Autocomplete
                  className={styles.departureField}
                  size="medium"
                  disablePortal
                  options={[
                    "Singapore (SIN)",
                    "Sydney (SYD)",
                    "Siem Reap (REP)",
                    "Shanghai (PVG)",
                    "Sanya (SYX)",
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
                <div className={styles.arrivalField}>
                  <div className={styles.input}>
                    <div className={styles.labelContainer}>
                      <div className={styles.arrival}>Arrival</div>
                    </div>
                    <div className={styles.active}>
                      <div className={styles.muiautocompletetag}>
                        <div className={styles.chip}>
                          <div className={styles.container}>
                            <div className={styles.avatar}>
                              <div className={styles.op}>F</div>
                            </div>
                            <div className={styles.typography}>
                              <div className={styles.chip1}>Chip</div>
                            </div>
                            <img
                              className={styles.cancelIcon}
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.chip2}>
                          <div className={styles.container1}>
                            <div className={styles.avatar1}>
                              <div className={styles.op1}>F</div>
                            </div>
                            <div className={styles.typography1}>
                              <div className={styles.chip3}>Chip</div>
                            </div>
                            <img
                              className={styles.cancelIcon1}
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.losAngelesLa}>
                        Los Angeles (LA)
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.selectoutlined}>
                  <DatePicker
                    label="Date"
                    value={selectOutlinedDateTimePickerValue}
                    onChange={(newValue: any) => {
                      setSelectOutlinedDateTimePickerValue(newValue);
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
              <div className={styles.buttonGroup}>
                <div
                  className={styles.searchFlightsButton}
                  onClick={onSearchFlightsButtonClick}
                >
                  <div className={styles.button}>Search flights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchSection;
