import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

const SessionTimeout = () => {
  const [sessionTimeout, setSessionTimeout] = useState(1200);
  const [showTimeoutMessage, setShowTimeoutMessage] = useState(false);
  const [remainingTime, setRemainingTime] = useState(sessionTimeout);
  const buttonClassNames =
    "2xl:px-4 2xl:pb-2 2xl:pt-1 bg-[#eb1933] 2xl:rounded-[3px] 2xl:text-xl font-bold text-white cursor-default z-[0]";
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
      <div className="2xl:flex 2xl:items-center 2xl:justify-center 2xl:gap-4">
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
    <div className="2xl:flex 2xl:gap-5 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:pt-6 2xl:pb-10 2xl:border-b 2xl:px-6">
      <p className="text-xl font-semibold">Session Timeout in</p>
      <p className="">{formatTime(remainingTime)}</p>
    </div>
  );
};

export default SessionTimeout;
