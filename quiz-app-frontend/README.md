# Quiz App

## Overview
This is a simple quiz application built with React. The app allows users to answer multiple-choice questions and provides a user-friendly interface for interaction.

## Project Structure
```
frontend
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── Question.js
│   │   └── Answer.js
│   ├── styles
│   │   └── main.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```


## Components
- **Question**: Displays the quiz question and handles the display logic.
- **Answer**: Displays the answer options and manages user selection.

## License
This project is licensed under the MIT License.

## Erase Created Quizzes

- Chrome - control + shift + j
- put: allow paste
- const keep = JSON.parse(localStorage.getItem('quizzyCustomQuizzes') || '[]')
  .filter(q => !['name1', 'name2'].includes((q.title || q.id || '').trim()));
localStorage.setItem('quizzyCustomQuizzes', JSON.stringify(keep));
