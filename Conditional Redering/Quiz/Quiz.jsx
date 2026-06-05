import React, { useState } from "react";
import Result from "./Result";

function Quiz() {
  const questions = [
    {
      question: "What is React?",
      options: ["Library", "Framework", "Language", "Tool"],
      answer: "Library",
    },
    {
      question: "Who created React?",
      options: ["Google", "Facebook", "Microsoft", "Apple"],
      answer: "Facebook",
    },
    {
      question: "What is useState?",
      options: ["Hook", "API", "Database", "Server"],
      answer: "Hook",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;

    if (next < questions.length) {
      setCurrent(next);
    } else {
      setIsFinished(true);
    }
  };

  // ✅ Conditional Rendering
  if (isFinished) {
    return <Result score={score} total={questions.length} />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quiz App</h2>

      <h3>
        Q{current + 1}: {questions[current].question}
      </h3>

      {questions[current].options.map((opt, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(opt)}
          style={{ display: "block", margin: "10px" }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Quiz;