# Fitness React App

## Overview

The Fitness React App is a web application built with React that leverages the RapidAPI Exercise DB to provide users with a comprehensive resource for searching exercise categories, viewing exercise details, and receiving YouTube video recommendations related to specific exercises.

## Features

- Exercise Search: Users can search for exercises by categories such as muscle group, equipment, or exercise type. The app retrieves exercise data from the RapidAPI Exercise DB based on user input and displays relevant results.

- Exercise Details: Upon selecting an exercise from the search results, users can view detailed information about the exercise, including its name, description, variations, and proper techniques.

- YouTube Video Recommendations: The app also provides users with YouTube video recommendations related to the selected exercise. These recommendations offer additional visual resources for users to learn, observe proper form, or follow exercise routines.

## Dependencies

The following dependencies are used in this project:

- React: A JavaScript library for building user interfaces.
- React Router: Enables routing and navigation within the React application.
- Axios: Handles API requests to RapidAPI Exercise DB and YouTube Data API.
- Material-UI: Provides pre-designed React components for faster UI development.

## Installation

To install and run the Fitness React App locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/whiHak/Fitness-App.git
   ```

2. Navigate to the project directory:

   ```
   cd Fitness-App
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Create a .env file in the root directory and add your RapidAPI key and YouTube Data API key:

   ```
   REACT_APP_RAPID_API_KEY=your_rapidapi_key
   ```

5. Start the development server:

   ```
   npm start
   ```

6. Open your web browser and navigate to http://localhost:3000 to access the Fitness React App.

## API Integration

The Fitness React App integrates with the following APIs:

- RapidAPI Exercise DB: Provides exercise data based on various categories. Make sure to sign up for a RapidAPI account and obtain an API key.

- YouTube Data API: Retrieves YouTube video recommendations for exercise-related content. Generate a YouTube Data API key by following YouTube's API documentation.

## Contributions

Contributions to the Fitness React App are welcome! Feel free to submit pull requests or report any issues you encounter in the GitHub repository.

## License

This project is licensed under the MIT License (https://opensource.org/licenses/MIT).

---
