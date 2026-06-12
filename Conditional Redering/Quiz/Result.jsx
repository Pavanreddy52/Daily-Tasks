import React from "react";

function Result({ score, total }) {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Quiz Finished 🎉</h2>

      {/* Conditional message */}
      {score === total ? (
        <h3>Perfect Score! 🏆</h3>
      ) : score >= 2 ? (
        <h3>Good Job 👍</h3>
      ) : (
        <h3>Try Again 📚</h3>
      )}

      <p>
        Your Score: {score} / {total}
      </p>
    </div>
  );
}

export default Result;