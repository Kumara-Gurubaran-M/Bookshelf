# Bookshelf App

A simple React application to search for books using the Open Library API and manage a personal bookshelf.

## Table of Contents

- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Setup

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v14 or later recommended)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Clone the Repository

```bash
git clone https://github.com/yourusername/bookshelf.git
```
```
cd bookshelf
```
# Install Dependencies
```
npm install
```
# Run project
```
npm start
```
# Usage
- Search for Books: Use the input field on the homepage to search for books by name. The results will be displayed in real-time as you type.
- Add to Bookshelf: Click the "Add to Bookshelf" button on a book card to save the book to your personal bookshelf.
- View Bookshelf: Navigate to the "My Bookshelf" page using the link in the navigation bar to view all the books you have added to your bookshelf.

  # Project Structure
- src/components/Search.js: Component for searching books and displaying search results.
- src/components/Bookshelf.js: Component for displaying the books saved to the bookshelf.
- src/App.js: Main application component that sets up routes and navigation.
- src/index.js: Entry point of the React application.
- src/index.css: Main stylesheet for the application.
# Dependencies
- react: JavaScript library for building user interfaces.
- react-dom: Entry point of the DOM-related rendering paths.
- react-router-dom: DOM bindings for React Router.
- lodash.debounce: Utility function for debouncing.
# License
This project is licensed under the MIT License. See the LICENSE file for details.
