# React Weather App

This project is a React application that allows users to view weather information and manage their authentication state. 

## Installation

To get started with this project, follow these steps:

- Clone the repo
- Install the packages `npm i`
- Rename `.env.example` as `.env`. `mv .env.example .env`
- Run it. `npm run dev`

## File Structure

Here's an overview of the file structure:

- `src/` - source files for the React application.
  - `App.css` - styles for the main App component.
  - `App.js` - main React component that serves as the root of the app.
  - `config.js` - configuration file for the app.
  - `hoc/` - higher-order components, for example, `withAuth.js` for authentication handling.
  - `hooks/` - custom React hooks for authentication (`auth`) and weather data (`weather`).
  - `pages/` - React components representing pages of the app.
  - `services/` - service files for handling external API calls.
  - `index.js` - entry point for the React application.

