import React, { useEffect, useState } from "react";

function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Start / Pause Timer
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    // Cleanup
    return () => clearInterval(interval);
  }, [isRunning]);

  // Format Time
  const formatTime = () => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    return `${hrs}:${mins}:${secs}`;
  };

  // Handlers
  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>React Stopwatch</h1>

      <div style={styles.timer}>{formatTime()}</div>

      <div style={styles.buttonGroup}>
        <button style={styles.startBtn} onClick={handleStart}>
          Start
        </button>

        <button style={styles.pauseBtn} onClick={handlePause}>
          Pause
        </button>

        <button style={styles.resetBtn} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
  },

  title: {
    fontSize: "40px",
    marginBottom: "20px",
  },

  timer: {
    fontSize: "60px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#2563eb",
  },

  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },

  startBtn: {
    padding: "12px 24px",
    border: "none",
    backgroundColor: "#16a34a",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  pauseBtn: {
    padding: "12px 24px",
    border: "none",
    backgroundColor: "#f59e0b",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  resetBtn: {
    padding: "12px 24px",
    border: "none",
    backgroundColor: "#dc2626",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default StopWatch;