import React, { useContext, useRef, useEffect, useState } from "react";
import { LanguageContext } from "./App";

export const Clock = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [hourState, setHourState] = useState(new Date());
  const ref = useRef(null);

  useEffect(() => {
    setInterval(() => {
      setHourState(new Date());
    }, 1000);
  }, []);

  function handleTime() {
    setLanguage(
      ref.current.value === "it-IT" ? "Ora Corrente" : "Current Time"
    );
  }

  return (
    <div className="counter-timer">
      <h2>{hourState.toLocaleTimeString()}</h2>
      <h3>{language}</h3>
      <select ref={ref} onChange={handleTime} name="language" id="language">
        <option value="it-IT">Italiano</option>
        <option value="en-EN">English</option>
      </select>
    </div>
  );
};
