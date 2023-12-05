import { useEffect, useState } from "react";
import { utilService } from "../../services/util.service";
import "./SeasonClock.css";

export const SeasonClock = () => {
  const [isDark, setIsDark] = useState(false);
  const [currentSeason, setCurrentSeason] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      setDate(currentDate);
      setCurrentSeason(utilService.getSeason(currentDate));
      setCurrentMonth(utilService.getMonthName(currentDate));
      setCurrentDay(utilService.getDayName(currentDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={isDark ? "dark" : "white"}
      onClick={() => setIsDark((prevIsDark) => !prevIsDark)}
    >
      <h1>
        {currentMonth} ({currentSeason})
      </h1>
      <img
        src={`/public/seasons/${currentSeason.toLowerCase()}.png`}
        alt={currentSeason}
      />
      <p>{currentDay}</p>
    </div>
  );
};
