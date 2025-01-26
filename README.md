
# React + Vite Movie Dashboard

This project provides a simple movie dashboard application built using React and Vite. It includes functionality to display a chart with average ratings by genre, a leaderboard of top-rated movies, and a search/filter panel to search for movies based on various attributes (title, genre, year, and rating). 

The application uses:
- **React** for UI components.
- **Vite** for fast build and development.
- **Tailwind CSS** for styling.
- **Recharts** for rendering charts.

## Prerequisites

Before you can run the application, ensure that you have the following installed:

- **Node.js** (v14 or later)
- **npm** (Node Package Manager) or **yarn** (optional)

## Installation

To get started with this application, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/anthonyTahtouh/movie-dashboard.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd movie-dashboard
   ```

3. **Install dependencies:**

   If you're using npm:

   ```bash
   npm install
   ```

   Or, if you're using yarn:

   ```bash
   yarn install
   ```

## Running the Application

After installing the dependencies, you can run the development server:

- **Using npm:**

  ```bash
  npm run dev
  ```

- **Using yarn:**

  ```bash
  yarn dev
  ```

The app will be available at http://localhost:5173 (or another URL shown in the terminal). Open this URL in your browser to view the app.

## Features

1. **Movie Dashboard:**
   - Displays a bar chart with average ratings by genre.
   - Shows a leaderboard of top 5 movies based on rating.
   - Provides a search and filter panel to filter movies by title, genre, year, and minimum rating.

2. **Responsive Layout:**
   - The layout is responsive and adjusts to different screen sizes (e.g., mobile and desktop).

3. **Filters:**
   - You can filter movies by title, genre, year, and rating.
   - The filter panel also includes a "Reset Filters" button that resets all filters to their initial state.

## Styling

The project uses **Tailwind CSS** for styling. Custom styles are provided in the Tailwind configuration file. The project also includes a light/dark mode toggle based on the user's system preferences.

## Tools Used

- **Vite** for a fast, modern development environment.
- **React** for building the user interface.
- **Recharts** for rendering the chart.
- **Tailwind CSS** for utility-first styling.
- **ESLint** for linting and code quality checks.

## Development Notes

If you're contributing to the project, please follow the following guidelines:

- **ESLint:** Code is linted using ESLint with some default rules. Make sure to run `npm run lint` to check your code before submitting.
- **Tailwind CSS:** Ensure that Tailwind's classes are used properly. For custom styling, prefer adding styles using the `@layer` directive or the `tailwind.config.js` file.