import React from "react";
import { Question } from "../types/question";

interface QuestionCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  return (
    <div>
      <h2 className="question">{question.questionText}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="option"
            onClick={() => onAnswer(index === question.correctAnswer)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
