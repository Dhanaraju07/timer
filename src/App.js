import React, { useEffect, useState } from "react";

const App = () => {
  const [time, setTime] = useState(30);
  const [disabledTime, setDisabledTime] = useState(false);

  useEffect(() => {
    let countdownTimer;
    if (time > 0 && !disabledTime) {
      countdownTimer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      setDisabledTime(true);
    }

    return () => {
      clearInterval(countdownTimer);
    };
  }, [time, disabledTime]);

  const startTimer = () => {
    if (disabledTime) {
      setTime(30);
      setDisabledTime(false);
    }
  };

  return (
    <>
      {disabledTime ? (
        <>
        <h1>OTP Expired</h1>
        <button onClick={startTimer}>Resend</button>
        </>
      ) : (
        <div>
          <h1>Timer</h1>
          <h3>{`00: ${time < 10 ? "0" : ""}${time}`}</h3>
          
        </div>
      )}
    </>
  );
};

export default App
