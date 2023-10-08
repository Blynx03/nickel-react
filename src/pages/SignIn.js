import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddLog from "../components/AddLog";
import "./signin.css";

const SignIn = ({
  chosenFood,
  mainLog,
  setMainLog,
  signedIn,
  setSignedIn,
  setUserId,
  setLoginEmail,
  userData,
  setUserData,
}) => {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    emailReg: "",
    passwordReg: "",
    confirm: "",
    acceptance: false,
  });
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  let [loggingIn, setLoggingIn] = useState(true);
  const navigate = new useNavigate();
  const advise = document.querySelector(".submit-btn");

  function handleSignIn(e) {
    // e.preventDefault();

    // checking if email exists in record
    const isEmailFound = mainLog.some(
      (user) => user.email === loginFormData.email
    );

    if (!isEmailFound) {
      advise.classList.add("submit-btn-message");
      advise.textContent = "Not in record. Try again or choose Signup.";
      return;
    }

    mainLog.map(({ id, name, email, password }) => {
      if (email === loginFormData.email) {
        if (password === loginFormData.password) {
          setSignedIn(true);
          if (chosenFood !== undefined || chosenFood !== null) {
            document.querySelector(".nav-signin-link").textContent = `Logout`;
            navigate("/pages/bypoints");
          } else {
            navigate("/*");
            setUserId(id);
            document.querySelector(".nav-signin-link").textContent = `Logout`;
          }
          setLoginEmail(email);
          if (localStorage.getItem("userrecord")) {
            const record = JSON.parse(
              localStorage.getItem("userrecord-" + email)
            );
            setUserData(record);
          }
        } else {
          const makeRed = document.querySelector(".password-fieldset");
          makeRed.style.animation = "1s shake ease";
        }
      } else {
        const makeRed = document.querySelector(".email-fieldset");
        makeRed.style.animation = "1s shake ease";
      }
    });
  }

  function handleRegister() {
    console.log("handle register");
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    let formToUse = loggingIn ? setLoginFormData : setSignUpData;
    formToUse((prevSignUpData) => {
      return {
        ...prevSignUpData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleClick() {
    if (loginFormData.email !== "") {
      advise.classList.remove("submit-btn-message");
      advise.textContent = "Login";
    }
  }

  const logInCard = (
    <>
      <form
        onSubmit={(e) => handleSignIn(e)}
        className="sign-in-form form-container"
      >
        <div className="sign-in-header signup-header">Login Form</div>
        <div className="login-signup-switches-container">
          <div
            className="login-switch login-signup-switches"
            onClick={() => setLoggingIn(true)}
            tabIndex={0}
          >
            Login
          </div>
          <div
            className="signup-switch login-signup-switches"
            onClick={() => setLoggingIn(false)}
            tabIndex={1}
          >
            Signup
          </div>
        </div>
        <fieldset className="email-fieldset fieldset">
          <legend className="legend">Email</legend>
          <input
            type="email"
            name="email"
            className="login-input"
            onClick={handleClick}
            onChange={handleChange}
            placeholder="Email Address *"
            value={loginFormData.email}
          />
        </fieldset>
        <fieldset className="password-fieldset fieldset">
          <legend className="legend">Password</legend>
          <input
            type="password"
            name="password"
            className="login-input"
            onClick={handleClick}
            onChange={handleChange}
            placeholder="Password *"
            value={loginFormData.password}
          />
        </fieldset>
        <div className="required">* required</div>
        <div className="login-forgot-password-link">Forgot password?</div>
        <button type="button" onClick={handleSignIn} className="submit-btn">
          Login
        </button>
        <div className="or-sign-in">Or Sign In Using</div>
        <div className="third-party-login-container">
          <div className="google-container other-login-container">
            <img
              src="./images/google-icon.png"
              alt="Google Logo"
              className="third-party-icon"
            />{" "}
            <span className="google-login-link login-link">Google</span>
          </div>
          <div className="facebook-container other-login-container">
            <img
              src="./images/fb-icon.png"
              alt="Facebook Logo"
              className="third-party-icon"
            />
            <span className="facebook-login-link login-link">Facebook</span>
          </div>
        </div>
        <div className="not-a-member">
          Not a member?
          <span className="signup-link" onClick={() => setLoggingIn(false)}>
            {" "}
            Signup now
          </span>
        </div>
      </form>
    </>
  );

  const signUpCard = (
    <>
      <form onSubmit={handleRegister} className="signup-form form-container">
        <div className="signup-header sign-in-header">Signup Form</div>
        <div className="login-signup-switches-container login-signup-switches-container2">
          <div
            className="login-switch2 login-signup-switches"
            onClick={() => setLoggingIn(true)}
          >
            Login
          </div>
          <div
            className="signup-switch2 login-signup-switches"
            onClick={() => setLoggingIn(false)}
          >
            Signup
          </div>
        </div>

        <div className="fullname-container">
          <fieldset className="firstname-fieldset fieldset">
            <legend className="legend">First Name</legend>
            <input
              type="text"
              name="firstName"
              className="login-input login-input2"
              onChange={handleChange}
              placeholder="First Name *"
              value={signUpData.firstName}
              tabIndex={0}
              autoFocus
            />
          </fieldset>
          <fieldset className="lastname-fieldset fieldset">
            <legend className="legend">Last Name</legend>
            <input
              type="text"
              name="lastName"
              className="login-input login-input2"
              onChange={handleChange}
              placeholder="Last Name *"
              value={signUpData.lastName}
            />
          </fieldset>
        </div>

        <div className="signup-email-password-container">
          <fieldset className="email-fieldset email2-fieldset fieldset">
            <legend className="legend">Email</legend>
            <input
              type="email"
              name="emailReg"
              className="login-input login-input2"
              onChange={handleChange}
              placeholder="Email Address *"
              value={signUpData.emailReg}
            />
          </fieldset>
          <fieldset className="signup-fieldset fieldset">
            <legend className="legend">Password</legend>
            <input
              type="password"
              name="passwordReg"
              className="login-input login-input2"
              onChange={handleChange}
              placeholder="Password *"
              value={signUpData.passwordReg}
            />
          </fieldset>
          <fieldset className="signup-fieldset fieldset">
            <legend className="legend">Confirm Password</legend>
            <input
              type="password"
              name="confirm"
              className="login-input login-input2"
              onChange={handleChange}
              placeholder="Retype Password *"
              value={signUpData.confirm}
            />
          </fieldset>
        </div>
        <div className="required">* required</div>
        <div className="tandc-container">
          <input
            type="checkbox"
            id="acceptance"
            className="signup-term"
            onChange={handleChange}
            name="acceptance"
            required
            checked={signUpData.acceptance}
          ></input>
          <label htmlFor="acceptance" className="acceptance">
            I have accepted the
          </label>
          <span className="tandc-link">Terms and Conditions</span>
        </div>
        <button type="submit" className="signup-submit-btn">
          SUBMIT
        </button>

        <div className="or-sign-in or-sign-in2">Or Sign In Using</div>
        <div className="third-party-login-container third-party-login-container2">
          <div className="google-container other-login-container">
            <img
              src="./images/google-icon.png"
              alt="Google Logo"
              className="third-party-icon"
            />{" "}
            <span className="google-login-link login-link">Google</span>
          </div>
          <div className="facebook-container other-login-container">
            <img
              src="./images/fb-icon.png"
              alt="Facebook Logo"
              className="third-party-icon"
            />
            <span className="facebook-login-link login-link">Facebook</span>
          </div>
        </div>
      </form>
    </>
  );

  return <>{loggingIn ? logInCard : signUpCard}</>;
};

export default SignIn;
