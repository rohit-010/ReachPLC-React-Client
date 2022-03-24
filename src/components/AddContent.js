import { useState } from "react";

const API = "http://localhost:5000/places";
const AddContent = (props) => {
  const [place, setPlace] = useState("");

  const placeChangeHandler = (event) => {
    setPlace(event.target.value);
  };

  const addPlace = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(API, {
        method: "POST",
        body: JSON.stringify({ text: place }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);
      props.onAdd();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={addPlace}>
      <label htmlFor="place">Place</label>
      <input
        id="place"
        type="text"
        value={place}
        onChange={placeChangeHandler}
      ></input>
      <button>Add</button>
    </form>
  );
};

export default AddContent;
