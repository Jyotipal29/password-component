import "./styles.css";

import { useEffect, useState } from "react";

export default function Passmatcher() {
  const [error, setError] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFirstPassword = (event) => {
    const password = event.target.value;
    setFirstPassword(password);
    if (!isContainNumber(firstPassword)) {
      console.log("Err");
      setError("Password must contain at least 1 digit");
    } else setError("");
  };

  useEffect(() => {
    if (firstPassword && !isContainNumber(firstPassword)) {
      setError("Password must contain at least 1 digit");
    } else if (
      firstPassword &&
      confirmPassword &&
      !isCorrectMatch(firstPassword, confirmPassword)
    ) {
      setError("Password does not match!");
    } else {
      setError("");
    }
  });

  function isCorrectMatch(pass1, pass2) {
    if (pass1 !== pass2) {
      return false;
    }
    return true;
  }

  const handleConfirmPassword = (event) => {
    const password = event.target.value;
    setConfirmPassword(password);
  };

  function isContainNumber(password) {
    return password.match(/\d+/g);
  }

  return (
    <div>
      <div>
        <h3>Check Password</h3>

        <div>
          <div style={{ alignSelf: "flex-end" }}>
            <div>Password : {""}</div>
            <input
              value={firstPassword}
              placeholder="Enter your password"
              onChange={handleFirstPassword}
            />
          </div>

          <div>
            <div> Confirm Password : </div>
            <input
              value={confirmPassword}
              type="password"
              placeholder="Confirm your password"
              onChange={handleConfirmPassword}
            />
          </div>

          <div>{error}</div>

          <button
            disabled={
              confirmPassword !== firstPassword || !!error || !firstPassword
            }
            className="pass-submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
