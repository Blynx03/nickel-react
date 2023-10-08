import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import "./addlog.css";
import HandleError from "./HandleError";
import ListFood from "./ListFood";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddLog = ({
  chosenFood,
  setChosenFood,
  totalPoints,
  signedIn,
  setSignedIn,
  setTotalPoints,
  handleAddToLog,
  page,
  logDate,
  setLogDate,
}) => {
  const [newDate, setNewDate] = useState("");
  let container;

  if (page === "search") {
    container = document.querySelector(".content-container");
  } else if (page === "byPoints") {
    container = document.querySelector(".bypoints-content-container");
  }

  container.style.filter = "blur(3px)";

  const handleCancel = () => {
    container.style.filter = "blur(0)";
    document.querySelector(".addlog-container").style.display = "none";

    let newPoints = 0;
    chosenFood.forEach(({ point }) => (newPoints += point));
    setTotalPoints(newPoints);
  };

  return (
    <div className="addlog-container">
      <div className="addlog-title">
        Chosen {chosenFood.length > 1 ? "Foods" : "Food"} - Review and ADD Date
        and Time
      </div>
      <div className="addlog-category-container">
        <div className="addlog-category-food">Food</div>
        <div className="addlog-category-point">Points</div>
      </div>
      <ul className="addlog-content-container">
        {chosenFood.length === 0 ? (
          <HandleError err="0" />
        ) : (
          <ListFood
            chosenFood={chosenFood}
            setChosenFood={setChosenFood}
            totalPoints={totalPoints}
            setTotalPoints={setTotalPoints}
            page={page}
            signedIn={signedIn}
          />
        )}
      </ul>
      {/* Date input and Time input  */}
      <div className="date-time-container">
        <div className="date-container">
          <div className="date-time">Date and Time</div>
          <DatePicker
            className="date"
            placeholderText="Click to Choose Date and Time"
            // id='date'
            showTimeSelect
            selected={newDate}
            onChange={(selectedDate) => {
              setLogDate(selectedDate);
              setNewDate(selectedDate);
            }}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
      </div>

      <div className="addlog-btn-container">
        <button
          type="button"
          className="addlog-btn-cancel"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type="button"
          autoFocus
          className="addlog-btn-add"
          onClick={handleAddToLog(chosenFood)}
        >
          Log
        </button>
      </div>
    </div>
  );
};

export default AddLog;
