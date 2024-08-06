import "./App.css";
import { useState } from "react";
import validator from "validator";

function App() {
  const [errorMessage, SetErrorMessage] = useState("");
  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      SetErrorMessage("Is Strong password");
    } else {
      SetErrorMessage("Is not Strong Password");
    }
  };

  return (
    <div className="App">
      <form className="form">
        <h1>Password strength validate using react</h1>
        <input
          type="text"
          placeholder="Enter the Password"
          required
          onChange={(e) => validate(e.target.value)}
        />
        <div className="msg">{errorMessage === "" ? null : <span style={{ color: errorMessage === "Is not Strong Password" ? "red" : "green" }}>{errorMessage}</span>} </div>
        
      </form>
    </div>
  );
}

export default App;
