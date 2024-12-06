import React from "react";

interface ResultProps {
  score: number;
  totalQuestions: number;
}

const Result: React.FC<ResultProps> = ({ score, totalQuestions }) => {
  return (
    <div className="result">
      <h2>Quiz Terminé !</h2>
      <p>
        Vous avez obtenu un score de {score} sur {totalQuestions}.
      </p>
    </div>
  );
};

export default Result;
