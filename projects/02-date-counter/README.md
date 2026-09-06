# Date Counter

A small React app for calculating the calendar date a chosen number of days before or after today.

## Features

- Increase or decrease the step size.
- Move the day counter forward or backward by that step.
- See the resulting date with clear wording for today, future dates, and past dates.

## Getting started

From this project directory, install dependencies and start the development server:

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) if the browser does not open automatically.

## How it works

1. Use the first `-` and `+` controls to set the number of days moved per click.
2. Use the second pair of controls to adjust the date counter.
3. The app displays the corresponding date relative to the current day.

For example, with a step of `2`, pressing the counter's `+` button changes the count from `0` to `2` and shows the date two days from today.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the app in development mode. |
| `npm test` | Starts the interactive test runner. |
| `npm run build` | Creates an optimized production build in `build/`. |

## Tech stack

- React
- Create React App (`react-scripts`)
