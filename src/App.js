import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import ByPoints from "./pages/ByPoints";
import Content from "./components/Content";
import FoodLog from "./pages/FoodLog";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import { useNavigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HandleError from "./components/HandleError";

function App() {
  let [totalPoints, setTotalPoints] = useState(0);
  let [chosenFood, setChosenFood] = useState([]);
  let [logDate, setLogDate] = useState(new Date());
  let [signedIn, setSignedIn] = useState(false);
  let [userId, setUserId] = useState(0);
  const [loginEmail, setLoginEmail] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const [mainLog, setMainLog] = useState([
    {
      id: 1,
      userId: 1,
      name: "Charlie",
      email: "cchan_03@yahoo.ca",
      password: "nickel",
      log: [],
    },
    {
      id: 2,
      userId: 2,
      name: "Charlize",
      email: "margrethekimi@gmail.com",
      password: "kimpwet",
      log: [],
    },
    {
      id: 3,
      userId: 3,
      name: "Charlene",
      email: "cheen_24@yahoo.ca",
      password: "malene",
      log: [],
    },
    {
      id: 4,
      userId: 4,
      name: "User",
      email: "user@user.com",
      password: "user",
      log: [],
    },
  ]);

  // user Id came from sign in page
  function handleAddToLog(e) {
    mainLog.map((info) => {
      if (signedIn) {
        info.log = [...info.log, { date: logDate, items: chosenFood }];
        navigate("../pages/foodlog");
      } else {
        navigate("../pages/signin");
      }
      localStorage.setItem("userrecord-" + info.email, JSON.stringify(info));
    });
  }

  return (
    <div className="App">
      <div className="main">
        <Header signedIn={signedIn} setSignedIn={setSignedIn} />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route
            path="/pages/search"
            element={
              <Content
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
            }
          />
          <Route
            path="/pages/bypoints"
            element={
              <ByPoints
                chosenFood={chosenFood}
                setChosenFood={setChosenFood}
                totalPoints={totalPoints}
                setTotalPoints={setTotalPoints}
                handleAddToLog={handleAddToLog}
                logDate={logDate}
                setLogDate={setLogDate}
                signedIn={signedIn}
              />
            }
          />
          <Route
            path="/pages/foodlog"
            element={
              <FoodLog
                chosenFood={chosenFood}
                setChosenFood={setChosenFood}
                mainLog={mainLog}
                loginEmail={loginEmail}
                setLoginEmail={setLoginEmail}
                signedIn={signedIn}
                userData={userData}
                setUserData={setUserData}
              />
            }
          />
          <Route
            path="/pages/signin"
            element={
              <SignIn
                chosenFood={chosenFood}
                mainLog={mainLog}
                setMainLog={setMainLog}
                signedIn={signedIn}
                setSignedIn={setSignedIn}
                setUserId={setUserId}
                setLoginEmail={setLoginEmail}
                userData={userData}
                setUserData={setUserData}
              />
            }
          />
          <Route path="/pages/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
