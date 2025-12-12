import React from 'react';

const Answer = ({ answerText, onSelect }) => {
    return (
        <div className="answer-option" onClick={() => onSelect(answerText)}>
            {answerText}
        </div>
    );
};

export default Answer;