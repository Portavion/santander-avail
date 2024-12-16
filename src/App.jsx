import { useState, useEffect } from "react";
import "./App.css";

import { StationCard } from "./components/StationCard/StationCard.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [stations, setStations] = useState([]);
  // let loading = 0;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const zishuPref = [459, 521, 492, 132, 474, 517, 471, 522, 357];
  const requests = zishuPref.map(
    (station) => `https://api.tfl.gov.uk/BikePoint/BikePoints_${station}`,
  );

  useEffect(() => {
    let ignore = false;
    Promise.all(
      requests.map((url) => fetch(url).then((resp) => resp.json())),
    ).then((texts) => {
      if (ignore) return;
      setStations((stations) => [...stations, ...texts]);
      setLoading(false);
    });
    return () => {
      ignore = true;
    };
  }, []);

  if (loading) {
    return <p>Loading</p>;
  } else if (error) {
    return <p>An error has occured: {error}</p>;
  }
  const stationCards = stations.map((station) => {
    return (
      <StationCard
        key={station.commonName}
        stationName={station.commonName}
        bikeLeft={station.additionalProperties[6].value}
        ebikeLeft={station.additionalProperties[10].value}
        spaceLeft={station.additionalProperties[7].value}
      ></StationCard>
    );
  });
  return (
    <>
      <h1>Stationz</h1>
      {stationCards}
      <Footer></Footer>
    </>
  );
}

export default App;
