# Getting Started with Fin Track

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Docker](#docker)

## Installation

1. Ensure you have Node.js and npm installed. This project is compatible with:
   - Node.js >=v20.11.0
   - npm >=v10.2.4

3. Install the project dependencies:
   - `npm install`
     or
   - `yarn install`

## Environment Variables

Create an environment `.env` file in the root directory of your project. Add the following environment variable:
- `REACT_APP_SERVER_URL`: Your backend server URL.

## Usage

To run the application in development mode:
- `npm run start`
  or
- `yarn run start`

## Docker

To run the application in a Docker container:
- `docker-compose up --build`