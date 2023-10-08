import React, { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Points from "../components/Points";
import foodData from "../components/FoodData";
import AddLog from "../components/AddLog";
import "./bypoints.css";
import { checkPoints } from "../components/Points";

const ByPoints = ({
  chosenFood,
  setChosenFood,
  totalPoints,
  signedIn,
  setTotalPoints,
  handleAddToLog,
  logDate,
  setLogDate,
}) => {
  let showFood = [];
  // const subRoot = ReactDOM.createRoot(document.querySelector('.content-container-for-addlog'));

  let convertNumberToWord = (point) => {
    switch (point) {
      case 1:
        return "One";
      case 2:
        return "Two";
      case 3:
        return "Three";
      case 4:
        return "Four";
      case 5:
        return "Five";
      case 6:
        return "Six";
      case 7:
        return "Seven";
      case 8:
        return "Eight";
      case 9:
        return "Nine";
      case 10:
        return "Ten";
    }
  };

  function styleChoice(foodClass) {
    let styleClass = document.getElementById(foodClass);
    styleClass.style.color = "tomato";
    styleClass.style.textDecoration = "underline";
    styleClass.style.fontWeight = "bold";
  }

  function unStyleChoice(foodClass) {
    let styleClass = document.getElementById(foodClass);
    styleClass.style.color = "black";
    styleClass.style.textDecoration = "none";
    styleClass.style.fontWeight = "normal";
  }

  useEffect(() => {
    foodData.forEach(({ item }, index) => {
      chosenFood.forEach((food) => {
        if (food.item === item) {
          styleChoice("food-" + index);
        }
      });
      // console.log(foodData.indexOf(food))
    });
  }, []);

  function handleChoice(food, foodClass) {
    if (chosenFood.includes(food)) {
      unStyleChoice(foodClass);
      setTotalPoints((totalPoints -= food.point));
      setChosenFood(chosenFood.filter((item) => item.item !== food.item));
    } else {
      styleChoice(foodClass);
      setChosenFood([...chosenFood, food]);
      setTotalPoints((totalPoints += food.point));
    }

    const warningColor = document.getElementById("total");
    checkPoints(warningColor, totalPoints);
  }

  const handleAdd = () => {
    const subRoot = ReactDOM.createRoot(
      document.querySelector(".content-container-for-addlog")
    );
    subRoot.render(
      <AddLog
        chosenFood={chosenFood}
        setChosenFood={setChosenFood}
        totalPoints={totalPoints}
        setTotalPoints={setTotalPoints}
        handleAddToLog={handleAddToLog}
        page="byPoints"
        logDate={logDate}
        setLogDate={setLogDate}
        signedIn={signedIn}
      />
    );
  };

  for (let i = 1; i <= 10; i++) {
    if (i !== 2 && i !== 9) {
      showFood.push(
        <fieldset className="bypoints-content" key={i}>
          <legend className="one-bypoint">
            {convertNumberToWord(i)}
            {i === 1 ? "-Point" : "-Points"}
          </legend>
          <ul className="list-by-points-container">
            {foodData.map((food, index) => {
              if (food.point === i) {
                return (
                  <li className="list-of-foods" id={index} key={index}>
                    <label
                      className="foods-by-points"
                      id={"food-" + index}
                      onClick={() => handleChoice(food, "food-" + index)}
                    >
                      {food.item}
                    </label>
                  </li>
                );
              }
            })}
          </ul>
        </fieldset>
      );
    }
  }

  return (
    <>
      <div className="bypoints-content-container">{showFood}</div>
      <div className="content-container-for-addlog">
        {/* reserved for addlog  */}
      </div>
      <div className="total-points-container">
        <Points totalPoints={totalPoints} />
        <button className="add-btn" onClick={(e) => handleAdd(e)}>
          Add to Log
        </button>
      </div>
    </>
  );
};

export default ByPoints;
