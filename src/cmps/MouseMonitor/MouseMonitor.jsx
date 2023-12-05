import { useEffect, useState } from "react";
import "./MouseMonitor.css";

export const MouseMonitor = () => {
  const [isOn, setIsOn] = useState(true);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
   if (isOn)  document.addEventListener('mousemove', position)

   return () => {
    document.removeEventListener('mousemove', position);
  }
  }, [isOn]);

  const position = (e) => {
    setPos({
        x: e.clientX,
        y: e.clientY,
      });

  };


  return (
    <div className="mouseContainer">
      <h1>Mouse Position</h1>
      <p>
        x:{pos.x}, y:{pos.y}
      </p>
      <button onClick={() => setIsOn((prev) => !prev)}>{isOn ? 'Pause' : 'Resume'}</button>
    </div>
  );
};

export default MouseMonitor;
