# Expense Tracker

This is a simple expense tracker application built with React. Follow the instructions below to run the app locally on your machine.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: Node Package Manager is installed with Node.js. You can check if you have npm installed by running `npm -v` in your terminal.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/01chaitanya01/expense_tracker.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd expense_tracker
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Running the Application

To start the development server and run the app locally:

```bash
npm start
```

This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

## Project Structure

Here is an overview of the project's structure:

```
.
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Lockfile for dependencies
├── public
│   ├── favicon.ico         # Favicon for the app
│   ├── index.html          # HTML template
│   ├── logo192.png         # App logo
│   ├── logo512.png         # App logo
│   ├── manifest.json       # Web app manifest
│   └── robots.txt          # Robots.txt for web crawlers
└── src
    ├── App.css             # Global styles for the app
    ├── App.js              # Root component of the app
    ├── App.test.js         # Tests for the App component
    ├── components          # Directory for React components
    │   ├── Chart.jsx       # Chart component
    │   ├── Form.jsx        # Form component
    │   ├── HomePage.jsx    # HomePage component
    │   ├── List.jsx        # List component
    │   ├── NavBar.jsx      # NavBar component
    │   └── Total.jsx       # Total component
    ├── index.css           # Global styles
    ├── index.js            # Entry point of the app
    ├── logo.svg            # React logo
    ├── reportWebVitals.js  # Performance measuring
    ├── setupTests.js       # Setup for tests
    └── style               # Directory for component-specific styles
        ├── chart.css       # Styles for Chart component
        ├── form.css        # Styles for Form component
        ├── homepage.css    # Styles for HomePage component
        ├── list.css        # Styles for List component
        ├── navbar.css      # Styles for NavBar component
        └── total.css       # Styles for Total component
```

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes the single build dependency from your project.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
