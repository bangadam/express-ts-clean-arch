# Express TypeScript Clean Architecture

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Dependencies](https://img.shields.io/david/bangadam/express-ts-clean-arch.svg)](https://david-dm.org/bangadam/express-ts-clean-arch)

This project is an implementation of Clean Architecture using Express and TypeScript. The goal is to create an application structure that is modular, easy to understand, and easy to develop.

## Features

- **Express Server**: Web server using Express.js.
- **TypeScript**: Utilizes TypeScript for safer and more structured code.
- **Clean Architecture**: Separates code into several layers (domain, application, infrastructure, presentation) to maintain separation of concerns.

## Project Structure

```
express-ts-clean-arch/
├── src/
│   ├── domain/
│   ├── application/
│   ├── infrastructure/
│   └── presentation/
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── yarn.lock
```

## Installation

Ensure you have **Node.js** and **Yarn** installed on your system.

1. Clone the repository:

   ```bash
   git clone https://github.com/bangadam/express-ts-clean-arch.git
   ```

2. Navigate to the project directory:

   ```bash
   cd express-ts-clean-arch
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

## Configuration

1. Make sure the `.env` file is properly configured. Example:

   ```properties
   PORT=9000
   ```

2. Database configuration can be found at:

   ```
   src/application/helpers/databaseConfiguration.ts
   ```

   Adjust the settings according to your environment.

## Running the Application

Run the following command to start the application:

```bash
yarn start
```

The application will run at `http://localhost:9000`.

## Additional Scripts

- `yarn build`: Build the TypeScript application into JavaScript.
- `yarn dev`: Run the application with nodemon for development.

## Contribution

Contributions are welcome. Please create an _issue_ or _pull request_ for improvements and new features.

## License

This project is licensed under the [MIT License](LICENSE).
