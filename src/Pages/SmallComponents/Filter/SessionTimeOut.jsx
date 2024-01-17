import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

const SessionTimeout = () => {
  const [sessionTimeout, setSessionTimeout] = useState(1200);
  const [showTimeoutMessage, setShowTimeoutMessage] = useState(false);
  const [remainingTime, setRemainingTime] = useState(sessionTimeout);
  const buttonClassNames =
    "px-4 pb-2 pt-1 bg-[#eb1933] rounded-[3px] text-xl font-bold text-white cursor-default z-[0]";
  useEffect(() => {
    let timeoutId;

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleTimeout, remainingTime * 1000);
    };
    const handleTimeout = () => {
      setShowTimeoutMessage(true);
    };
    const updateRemainingTime = () => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          handleTimeout();
          return 0;
        }
      });
    };
    resetTimer();
    const timerInterval = setInterval(updateRemainingTime, 1000);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(timerInterval);
    };
  }, [remainingTime]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return (
      <div className="flex items-center justify-center gap-4">
        <label className="flex flex-col relative">
          <Button
            text={minutes}
            buttonClassNames={buttonClassNames}
            type={"button"}
          />
          <span className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[100%]">
            min
          </span>
        </label>
        <span className="text-[#eb1933] flex justify-center items-center text-xl font-bold">
          :
        </span>
        <label className="flex flex-col relative">
          <Button
            buttonClassNames={buttonClassNames}
            type={"button"}
            text={seconds < 10 ? "0" + seconds : seconds}
          />
          <span className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[100%]">
            sec
          </span>
        </label>
      </div>
    );
  };

  return (
    <div className="flex gap-5 flex-col justify-center items-center pt-5 pb-10 md:pt-6 md:pb-10 border-b md:px-6">
      <p className="text-xl font-semibold">Session Timeout in</p>
      <p className="">{formatTime(remainingTime)}</p>
    </div>
  );
};

export default SessionTimeout;
