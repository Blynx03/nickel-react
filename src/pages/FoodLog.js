import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./foodlog.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const FoodLog = ({
  chosenFood,
  mainLog,
  loginEmail,
  signedIn,
  userData,
  setUserData,
}) => {
  const [saveLog, setSaveLog] = useState([]);
  const navigate = useNavigate();
  let totalpts = 0;

  // retrieving user's data
  useEffect(() => {
    const foundUser = mainLog.find((user) => user.email === loginEmail);
    if (foundUser) {
      console.log(foundUser);
      setUserData(foundUser);
    }
    if (!signedIn) {
      navigate("../pages/signin");
    }
  }, [loginEmail, mainLog, setUserData]);

  console.log(userData);
  return (
    <>
      <div className="log-name">Hi {userData.name}!</div>
      <div className="log-container">
        <div className="foodlog-header">Here is your Food Log:</div>

        {userData.log.map(({ date, items }, index) => {
          return (
            <div className="per-log-container" key={uuidv4()}>
              <div className="date-time-container" key={uuidv4()}>
                <div className="addlog-date">
                  Date:{" "}
                  {date.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                    timeZoneName: "short",
                  })}
                </div>
                {/* <div className='addlog-time'>{time}</div> */}
              </div>
              <div className="word-container">
                <span className="word-food word">Food</span>
                <span className="word-point word">Point</span>
              </div>
              <ol className="foodlist-container">
                {items.map(({ item, point }) => {
                  totalpts += point;
                  return (
                    <li className="foodlist" key={uuidv4()}>
                      {item}
                      <span className="foodpoint" key={uuidv4()}>
                        {point}
                      </span>
                    </li>
                  );
                })}
              </ol>
              <div className="totalpts">Total Points: {totalpts}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FoodLog;
