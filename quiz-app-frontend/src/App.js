import React, { useState } from 'react';
import Question from './components/Question';
import Answer from './components/Answer';
import './styles/main.css';

const App = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'Berlin', isCorrect: false },
                { answerText: 'Madrid', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Rome', isCorrect: false },
            ],
        },
        {
            questionText: 'What is 2 + 2?',
            answerOptions: [
                { answerText: '3', isCorrect: false },
                { answerText: '4', isCorrect: true },
                { answerText: '5', isCorrect: false },
                { answerText: '6', isCorrect: false },
            ],
        },
        // Add more questions as needed
    ];

    const handleAnswerOptionClick = (isCorrect) => {
        setUserAnswers([...userAnswers, isCorrect]);
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            // Handle end of quiz
            console.log('Quiz finished! User answers:', userAnswers);
        }
    };

    return (
        <div className="app">
            {currentQuestionIndex < questions.length ? (
                <>
                    <Question questionText={questions[currentQuestionIndex].questionText} />
                    <div className="answer-options">
                        {questions[currentQuestionIndex].answerOptions.map((answerOption, index) => (
                            <Answer
                                key={index}
                                answerText={answerOption.answerText}
                                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div className="quiz-completion">
                    <h2>Quiz Completed!</h2>
                    <p>Your answers: {userAnswers.join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default App;