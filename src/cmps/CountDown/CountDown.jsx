import { useEffect, useRef, useState } from "react";
import "./CountDown.css";

export const CountDown = ({ toTime, startFrom, onDone }) => {

  const [time, setTime] = useState(startFrom);
  const intervalIdRef = useRef();
  const [audio] = useState(new Audio('/audio.mp3'));

  useEffect(() => {
    if (toTime) {
        const rest = toTime - Date.now();
        setTime(Math.floor(rest / 1000));
      }

      if (time > 0) {
        intervalIdRef.current = setInterval(() => {
          setTime((prevTime) => {
            return prevTime - 1;
          });
        }, 1000);
      } else {
        onDone();
        audio.play().then(() => console.log('test'))
        return
      }
    

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [time]);

  return <div className="countDiv" style={time < 7 ? { color: "red" } : null}>{time}</div>;
};
