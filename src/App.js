import React, { useState } from "react";
import "./styles.css";

const travelGuide = {
  "Hill-Station": [
    { name: "Mussori" },
    { name: "Lansdwone" },
    { name: "Manali" }
  ],
  "Ocean & Beaches": [
    { name: "Goa" },
    { name: "Havelock-island" },
    { name: "Pondicherry" }
  ],
  Trekking: [
    { name: "Kedarkantha" },
    { name: "Har-Ki-Doon" },
    { name: "Valley-Of-Flowers" }
  ]
};

var category = Object.keys(travelGuide);

export default function App() {
  const [selectedCategory, setCategory] = useState("Trekking");

  function clickHandler(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <h1>Welcome to travellers Guide</h1>
      <h2>Tell us where you like to travel and will take you there</h2>
      {category.map(function (category) {
        return (
          <button
            onClick={function () {
              return clickHandler(category);
            }}
          >
            {" "}
            {category}{" "}
          </button>
        );
      })}
      <hr></hr>
      <div>
        {travelGuide[selectedCategory].map(function (selectedCategory) {
          return (
            <ul>
              <li
                key={selectedCategory.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                {selectedCategory.name}
              </li>
            </ul>
          );
        })}

        {/* <ul>{travelGuide.map((places) => (
         <li  key={places.name}>
           <div> {places.name}</div>
         </li>
        {places}
       )
        )} 
         </ul>  */}
      </div>
    </div>
  );
}
