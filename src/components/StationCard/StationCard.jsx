import React from "react";
import styles from "./StationCard.module.css";

const StationCard = ({ stationName, bikeLeft, spaceLeft, ebikeLeft }) => {
  let bikeAvailable = bikeLeft > 0 ? true : false;
  let spaceAvailable = spaceLeft > 0 ? true : false;
  let ebikeAvailable = ebikeLeft > 0 ? true : false;

  return (
    <div className={styles.dockingStationContainer}>
      <h3>{stationName}</h3>
      <p className={bikeAvailable ? styles.available : styles.empty}>
        Bikes:{bikeLeft - ebikeLeft}
      </p>
      <p className={ebikeAvailable ? styles.available : styles.empty}>
        E-bikes:{ebikeLeft}
      </p>
      <p className={spaceAvailable ? styles.available : styles.empty}>
        Empty spaces:{spaceLeft}
      </p>
    </div>
  );
};

export { StationCard };
