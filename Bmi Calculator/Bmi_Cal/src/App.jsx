import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter your height and weight.");
    } else {
      const bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
      if (bmi < 18.5) {
        setMessage("You are Underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You are in the Healthy BMI range");
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage("You are Overweight");
      } else {
        setMessage("Gym jao bsdk");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label htmlFor="weight">Weight (lbs)</label>
            <input
              type="text"
              id="weight"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="height">Height (in)</label>
            <input
              type="text"
              id="height"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Calculate
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI Is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
