import React from "react";
import styles from "./Footer.module.css";

export default function () {
  return (
    <>
      <p className={styles.terms}> Powered by TfL Open Data</p>
      <p className={styles.terms}>
        Contains OS data © Crown copyright and database rights [2016]
      </p>
      <p className={styles.terms}>
        Geomni UK Map data © and database rights [2019]
      </p>
    </>
  );
}
