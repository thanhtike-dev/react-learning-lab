# React Flashcards

A small interactive flashcard app built with React. Click a card to flip it and reveal the answer to a React fundamentals question.

## Features

- Displays six React-focused question cards in a responsive grid.
- Flips the selected card with a CSS 3D animation.
- Shows one answer at a time; selecting another card closes the previous one.
- Click an open card again to return it to its question.

## Built with

- React
- React Hooks (`useState`)
- CSS Grid and 3D transforms
- Create React App

## Getting started

From this project directory, install dependencies and start the development server:

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the app in development mode. |
| `npm test` | Starts the interactive test runner. |
| `npm run build` | Creates an optimized production build. |

## Project structure

```text
src/
├── App.js       # Flashcard data and React components
├── index.css    # Grid, card, and flip-animation styles
└── index.js     # Application entry point
```

## How it works

`FlashCards` stores the currently selected card ID in state. When a card is clicked, its ID becomes selected and the card receives the `flipped` class, which rotates its inner element 180 degrees to reveal the answer.
