import React, { StrictMode, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./addlog.css";
import { FaTrashAlt } from "react-icons/fa";
import HandleError from "./HandleError";

const ListFood = ({
  chosenFood,
  setChosenFood,
  totalPoints,
  signedIn,
  setTotalPoints,
  page,
}) => {
  const [newFood, setNewFood] = useState([]);

  const deleteFood = (id, point) => {
    setTotalPoints((prevPoints) => prevPoints - point);

    if (newFood.length === 1) {
      const dateTimeContainer = document.querySelector(".date-time-container");

      dateTimeContainer.style.filter = "blur(2px)";

      // making time, date and log unclickable
      document.querySelector(".date").disabled = true;
      document.querySelector(".time").disabled = true;
      document.querySelector(".addlog-btn-add").disabled = true;
      document.querySelector(".addlog-btn-add").style.filter = "blur(2px)";

      // const noFoodSelectedError = ReactDOM.createRoot(document.querySelector('.addlog-content-container'))
      const noFoodSelectedError = document.querySelector(
        ".addlog-content-container"
      );

      noFoodSelectedError.render(<HandleError err="0" />);
    } else {
      setNewFood(() =>
        (newFood.length === 0 ? chosenFood : newFood).filter(
          (food) => food.id !== id
        )
      );
    }
  };

  return (newFood.length === 0 ? chosenFood : newFood).map((food) => (
    <form
      className="addlog-item-container"
      key={food.id}
      onClick={() => deleteFood(food.id, food.point)}
    >
      <li className="addlog-item">
        <label className="addlog-label">{food.item}</label>
        <div className="addlog-point">{food.point}</div>
        <FaTrashAlt className="addlog-delete-icon" role="button" tabIndex="0" />
      </li>
    </form>
  ));
};

export default ListFood;
