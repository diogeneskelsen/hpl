HPL Project
========
This is a full stack project entirely developed using Typescript and focused on the backend API which is a GraphQL architectured application using Express and NodeJS.

The frontend is a very simple application created using React and Material UI and it communicates with the API to list the properties and have forms to add a new property, edit an existing property, and a button to delete a property.

This project was created in the timeframe of 4 hours and some additional minutes were used to document the project.

# Docker

There is Docker support via `docker-compose.yml` in the root folder of the project. Please use Docker to run this project locally on your computer.

The existent configuration has 3 containers as described:
- `backend` runs the GraphQL API service at http://localhost:3001/graphql.
- `frontend` runs the React client at http://localhost:3000/
- `db` runs a basic Postgres database service on port 5433.

To start the containers on Docker, please execute on the terminal the command:
```
docker compose -f "docker-compose.yml" up -d --build
```

![Docker](https://github.com/diogeneskelsen/hpl/blob/main/docs/docker.png?raw=true)

# Additional documentation
The GraphQL API has an implementation of [GraphQL Playground](https://github.com/graphql/graphql-playground) which allows to access API documentation and Schema details.

With the Docker containers up and running access the documentation at: http://127.0.0.1:3001/playground

![Documentation](https://github.com/diogeneskelsen/hpl/blob/main/docs/graphql_doc.png?raw=true)

# Dependencies

This section lists all the dependencies that this project relies on. For more details about library versions, please check the `package.json` file inside each application root directory.

### ./
- Docker [(lastest version)](https://www.docker.com/products/docker-desktop/)
- Postgres (via docker-compose.yml)
- [NodeJS 16.16](https://nodejs.org/en/)

### ./backend
- @types/cors
- @types/express
- @types/node
- chai-jest
- cors
- express
- express-graphql
- graphql
- graphql-playground-middleware-express
- nodemon
- pg
- ts-node
- typeorm
- typescript
- @types/jest (dev)
- chai (dev)
- jest (dev)
- mocha (dev)
- supertest (dev)
- ts-jest (dev)

All dependencies are defined at `./backend/package.json`. To install the backend dependencies, please execute the command:
```
cd backend
npm install
```

### ./frontend
- @apollo/client
- @emotion/react
- @emotion/styled
- @mui/icons-material
- @mui/material
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- @types/jest
- @types/node
- @types/react
- @types/react-dom
- graphql
- react
- react-dom
- react-scripts
- typescript
- web-vitals

All dependencies are defined at `./frontend/package.json`. To install the frontend dependencies, please execute the command:
```
cd frontend
npm install
```

# Tests

This section contains the code testing guidelines. It should answer any questions you may have.

The frontend is not covered by tests however it is a standard React bootstrap project which is ready to use Jest.

The backend is ready to use Jest and it is supporting all business requirements covered by tests. Implement new tests under `backend/src/__tests__/`

## Running tests

### Backend Tests

To run the backend test suite (Docker containers must be running):

```
cd backend
npm run test
```

![Tests](https://github.com/diogeneskelsen/hpl/blob/main/docs/tests.png?raw=true)

# Roadmap

This section provides a description of features that were decided to be prioritized in this project. This should serve as a reference point to understand where the project is going and help determine some longer-term plans.

## 2.0.0 (improvements for the next version)
* Add more Type support in the code, define Interfaces and use more of this Typescript feature.
* Cleanup not used dependencies (for example, mocha).
* Update the backend application to make it able to run in an AWS Lambda and support AWS Gateway (for API auth control).
* Add tests in the frontend application.
* Add more fields and entities to the backend application.
- Frontend application can be improved in terms of design.

## 1.0.0 (current version)
### General
* Initial documentation (README.md).
* Typescript configuration.
* Jest configuration.
* Docker configuration.
* .gitignore definition.
### ./backend
* Ability to run a GraphQL API service.
* GraphQL API endpoints to support: Create Property, Delete Property, Update Property, and List Properties.
* GraphQL Playground support.
* Initial Schema configuration and architecture.
* Support custom message response in the API.
* 8 test cases.
### ./frontend
* Ability to request via GraphQL API and display a list of properties.
* Ability to delete an individual property via interface option.
* Ability to create a new property via the form.
* Ability to update a property via the form.