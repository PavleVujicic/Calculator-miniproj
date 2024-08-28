# Pavle's Calculator App

Welcome to **Pavle's Calculator App**, a simple and intuitive calculator built using React. This app allows users to perform basic arithmetic operations with real-time evaluation of expressions.

## Features

- **Basic Operations**: Supports addition, subtraction, multiplication, and division.
- **Real-time Evaluation**: The app evaluates the expression as you type, displaying the result dynamically.
- **Error Prevention**: Prevents invalid expressions, such as consecutive operators, ensuring smooth and error-free calculations.
- **Delete Functionality**: Easily remove the last character entered to correct mistakes.
- **Responsive Design**: User-friendly and adaptable to different screen sizes.

## How It Works

- **State Management**: The app maintains two states: `calc` for the current input expression and `result` for the evaluated result.
- **Operators**: A set of operators (`/`, `*`, `+`, `-`, `.`) is defined to manage input logic and prevent invalid expressions.
- **Display**: The current expression and real-time result (enclosed in parentheses) are shown on the display.
- **Digit Buttons**: Digits (1-9) are dynamically generated, updating the expression with each button click.
- **Calculation**: The `=` button finalizes the expression and displays the result.
- **Delete**: The `DEL` button allows users to remove the last entered character.

## Usage

- Click on the digit buttons to input numbers.
- Use the operator buttons (`/`, `*`, `+`, `-`) to perform arithmetic operations.
- The result is displayed in real-time as you input the expression.
- Press `=` to finalize the calculation.
- Use `DEL` to delete the last character.
