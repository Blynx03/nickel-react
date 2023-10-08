import Search from "../pages/Search";
import SearchResult from "./SearchResult";
import Points from "./Points";
import React, { useState } from "react";
import foodData from "./FoodData";
import "../pages/search-result.css";
import AddLog from "./AddLog";

function Content({
  chosenFood,
  setChosenFood,
  signedIn,
  setSignedIn,
  totalPoints,
  setTotalPoints,
  handleAddToLog,
  logDate,
  setLogDate,
}) {
  if (chosenFood.length === 0) {
    totalPoints = 0;
  }
  return (
    <>
      <div className="content-container">
        <Search
          foodData={foodData}
          id={foodData.id}
          chosenFood={chosenFood}
          setChosenFood={setChosenFood}
          totalPoints={totalPoints}
          setTotalPoints={setTotalPoints}
        />
        <SearchResult
          id={foodData.id}
          chosenFood={chosenFood}
          setChosenFood={setChosenFood}
          totalPoints={totalPoints}
          setTotalPoints={setTotalPoints}
          handleAddToLog={handleAddToLog}
          logDate={logDate}
          setLogDate={setLogDate}
          signedIn={signedIn}
          setSignedIn={setSignedIn}
        />
      </div>

      <div className="content-container-for-addlog">
        {/* reserved for addlog  */}
      </div>

      <Points totalPoints={totalPoints} />
    </>
  );
}

export default Content;
