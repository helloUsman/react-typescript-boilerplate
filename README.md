<p align="center">
  <img width="100" src="src/assets/react.png" alt="react logo" style="margin-right: 70px">
</p>

<h1 align="center" style="border-bottom: none; text-decoration: none;">React TypeScript Boilerplate</h1>

## Overview

This is a boilerplate project for building modern web applications using React and TypeScript. It comes pre-configured with essential tools and settings to kickstart your development process. The project structure is organized to maintain a clean and scalable codebase.

## Project Structure

- `src/`
  - `assets/`: Store your static assets like images, fonts, etc.
  - `components/`: Reusable React components.
  - `containers/`: Higher-level components or page layouts.
  - `hooks/`: Custom React hooks.
  - `utils/`: Utility functions and helpers.
  - `App.tsx`: The main entry point for the application.
  - `index.tsx`: The root file for rendering the React app.

## Features

- **TypeScript**: Enjoy the benefits of static typing for a more robust codebase.
- **Vite**: Utilize Vite as the build tool for a fast and efficient development server with HMR (Hot Module Replacement).
- **PWA Support**: Progressive Web App support for an enhanced user experience.
- **ESLint and Prettier**: Linting and code formatting configurations to maintain consistent and high-quality code.
- **Internationalization (i18next)**: Easily add language support with i18next.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <project-directory>

2. **Install dependencies:**

   ```bash
   yarn install or npm install

3. **Run the development server:**

   ```bash
   yarn start or npm start
   This will start the development server with hot module replacement (HMR).

4. **Build for production:**

   ```bash
   yarn build or npm run build
   This command generates a production-ready build.

## Linting and Code Formatting
ESLint is configured for code linting.
Prettier is set up for code formatting.
  
## Contributing
Feel free to contribute and improve this boilerplate. If you encounter any issues or have suggestions, please open an issue or a pull request.

## Guidelines for Contributors
Avoid adding dependencies unless they are essential for every project using this boilerplate.
Lock versions when adding new dependencies.
Assign the frontend review group to your pull request.

## License
This project is licensed under the MIT License.
