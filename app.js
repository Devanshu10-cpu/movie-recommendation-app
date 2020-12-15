import React, { useState } from "react";
import "./styles.css";

var dataBase = {
  Action: [
    {
      MovieName: "Terminator"
    },
    {
      MovieName: "Transformers"
    },
    {
      MovieName: "Fast and Furious"
    }
  ],
  Fiction: [
    {
      MovieName: "Lord of the Rings"
    },
    {
      MovieName: "Harry Potter"
    },
    {
      MovieName: "Pirates of the Carribean"
    }
  ],
  Horror: [
    {
      MovieName: "The Conjuring"
    },
    {
      MovieName: "Incidious"
    },
    {
      MovieName: "The Exorcist"
    }
  ]
};

var QuoteList = Object.keys(dataBase);

export default function App() {
  const [ret, setret] = useState("Action");

  function clickHandler(items) {
    var d = items;
    setret(d);
  }

  return (
    <div className="App">
      <h1>Movie Recommendation </h1>
      <h2>Select Genre :- </h2>
      <div>
        {QuoteList.map((items) => {
          return (
            <button
              onClick={() => clickHandler(items)}
              key={items}
              style={{
                padding: "0.5rem 1rem",
                margin: "1rem",
                backgroundColor: "white",
                color: "black"
              }}
            >
              {items}{" "}
            </button>
          );
        })}
      </div>

      <hr />

      <div>{ret}</div>

      <div>
        {dataBase[ret].map((yolo) => {
          return (
            <div>
              <ul
                style={{
                  listStyle: "none"
                }}
              >
                <li
                  style={{
                    margin: "auto",
                    border: "3px solid black",
                    maxWidth: "70%",
                    color: "green"
                  }}
                >
                  {" "}
                  <div
                    style={{
                      padding: "1rem",
                      fontSize: "larger"
                    }}
                  >
                    {yolo.MovieName}
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
