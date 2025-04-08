import { useEffect, useState } from "react";

function Clock({ color }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>Digital Clock</h3>
      <h4 style={{ color: color }}>{time}</h4>
    </div>
  );
}

const Hour = () => {
  const handleHour = () => {
    console.log("handleHour called");
  };

  handleHour();

  return (
    <div>
      <h3>Hour</h3>
    </div>
  );
};

export default Clock;
