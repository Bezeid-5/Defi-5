'use client'
import React, { useState } from "react";
import { questions } from "../data/questions";
import QuestionCard from "./QuestionCard";
import Result from "./Result";

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showFeedback, setShowFeedback] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showResult, setShowResult] = useState(false); // Nouveau state pour afficher le résultat
    const [score, setScore] = useState(0); // Nouveau state pour le score

    // Gestion de la sélection de la réponse
    const handleOptionSelect = (optionIndex: number) => {
        setSelectedOption(optionIndex);
        setShowFeedback(true);
        const correct = questions[currentQuestionIndex].correctAnswer === optionIndex;
        setIsCorrect(correct);
        if (correct) {
            setScore(score + 1); // Si la réponse est correcte, incrémenter le score
        }
    };

    // Gestion du bouton "Suivant"
    const handleNext = () => {
        if (currentQuestionIndex === questions.length - 1) {
            setShowResult(true); // Afficher le résultat lorsqu'on arrive à la dernière question
        } else {
            setShowFeedback(false);
            setSelectedOption(null);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsCorrect(null);
        }
    };

    // Gestion du bouton "Quitter"
    const handleQuit = () => {
        // Ici, vous pouvez ajouter une logique pour rediriger l'utilisateur ou fermer l'application.
        // Par exemple :
        window.location.href = "/"; 
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="quiz-container">
            {!showResult ? (
                <>
                    <h1>Quiz sur la cybersécurité</h1>
                    <div className="question">{currentQuestion.questionText}</div>
                    <div className="options">
                        {currentQuestion.options.map((option, index) => {
                            const isSelected = selectedOption === index;
                            const isIncorrect = isSelected && !isCorrect;
                            const optionClass = isSelected
                                ? isCorrect
                                    ? 'correct'
                                    : 'incorrect'
                                : '';
                            return (
                                <button
                                    key={index}
                                    className={`option ${optionClass}`}
                                    onClick={() => handleOptionSelect(index)}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>

                    {showFeedback && (
                        <div className="result">
                            {isCorrect ? 'Bonne réponse ! 🎉' : 'Mauvaise réponse, essayez encore.'}
                        </div>
                    )}

                    {showFeedback && !isCorrect && (
                        <div className="justification">
                            La bonne réponse est : {currentQuestion.options[currentQuestion.correctAnswer]}
                        </div>
                    )}

                    <div className="button-container">
                        <button
                            className="next"
                            onClick={handleNext}
                            disabled={selectedOption === null}
                        >
                            {currentQuestionIndex === questions.length - 1 ? "Terminé" : "Suivant"}
                        </button>
                    </div>
                </>
            ) : (
                // Affichage des résultats à la fin du quiz
                <div className="result">
                    <h2>Quiz terminé !</h2>
                    <p>
                        Vous avez obtenu {score} sur {questions.length} bonnes réponses.
                    </p>
                    <div className="button-container">
                        <button className="next" onClick={() => window.location.reload()}>
                            Rejouer
                        </button>
                        <button className="quit" onClick={handleQuit}>
                            Quitter
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
