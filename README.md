# Data Structures and Algorithms Frontend
Overview
This frontend application allows users to:
- Input a series of numbers.
- View the resulting binary search tree.
- Browse previously created trees retrieved from the backend.
- It interacts with the backend API to create and display BSTs.

## Features
- Input field for users to enter numbers.
- Submit button to process numbers and generate a BST.
- Show Previous button to view previously generated trees.
- Displays trees in JSON format or a simple visual tree layout.

## Integration with Backend

- Submit numbers: POST request to /process-numbers.

- View previous trees: GET request to /previous-trees.

- Ensure the backend server is running before interacting with the frontend.

## Setup Instructions

1. Clone the repository:
```
git clone <frontend-repo-url>
cd frontend
```

2. Install dependencies:

npm install


3. Start the development server:

npm start

