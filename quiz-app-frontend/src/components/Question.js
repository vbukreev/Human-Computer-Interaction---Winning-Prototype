import React from 'react';

const Question = ({ questionText }) => {
    return (
        <div className="question">
            <h2>{questionText}</h2>
        </div>
    );
};

export default Question;