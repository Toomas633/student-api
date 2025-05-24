# API Setup

This project is a simple Node.js API built with TypeScript and Express. It provides CRUD operations for managing student data.

## Features

* **CRUD Operations** : Create, Read, Update, and Delete students.
* **TypeScript** : Strongly typed codebase.
* **Express** : Lightweight and fast web framework.
* **Testing** : Includes integration tests using Jest.
* **Code Quality** : Configured with ESLint and Prettier for consistent code formatting and linting.

## Installation

1. Install dependencies:
   ```
   yarn install
   ```

## Scripts

The following npm scripts are available:

* **Start Development Server** : Runs the server in development mode with hot-reloading.
  ```
  npm run dev
  ```
* **Build** : Compiles TypeScript to JavaScript.
  ```
  npm run build
  ```
* **Start Production Server** : Runs the compiled server.
  ```
  npm start
  ```
* **Run Tests** : Executes the Jest test suite.
  ```
  npm test
  ```
* **Format Code** : Formats the codebase using Prettier.
  ```
  npm run prettier-fix
  ```

## Project Structure

**api/
├── src/
│   ├── constants/       # Constants for messages and errors
│   ├── controllers/     # Express controllers
│   ├── models/          # TypeScript interfaces
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   └── index.ts         # Entry point
├── specs/               # Jest test files
├── .vscode/             # VS Code settings
├── .eslintrc.json       # ESLint configuration
├── .prettierrc          # Prettier configuration
├── nodemon.json         # Nodemon configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project metadata and scripts***

## API Endpoints

### Base URL: `http://localhost:3000`

#### Students

* **GET** `/student`: Fetch all students.
* **POST** `/student`: Add a new student.
* **GET** `/student/:studentNumber`: Fetch a specific student by student number.
* **PATCH** `/student/:studentNumber`: Update a student's details.
* **DELETE** `/student/:studentNumber`: Delete a student.

## Testing

Run the test suite using:
```
yarn test
```

The tests are located in the [specs](vscode-file://vscode-app/c:/Users/tooma/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) directory and include integration tests for all endpoints.

## Code Quality

* **ESLint** : Linting is configured with the Airbnb style guide.
* **Prettier** : Code formatting is enforced with Prettier.

## Development Tools

* **Nodemon** : Automatically restarts the server during development.
* **TypeScript Paths** : Simplified imports using `@` alias.
