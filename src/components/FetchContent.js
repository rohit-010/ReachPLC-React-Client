import { useEffect, useState } from "react";

const API = "http://localhost:5000/places";
const FetchContent = (props) => {
  const [places, setPlaces] = useState({});

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setPlaces(data);
      console.log(data);
    };

    try {
      fetchContent();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const placesList = Object.values(places).map((place) => {
    return (
      <div key={place.id}>
        <div style={{ border: "1px solid #eee" }}>{place.text}</div>
      </div>
    );
  });

  return <div>{placesList}</div>;
};

export default FetchContent;
