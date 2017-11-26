# Evil Corp

Coding challange to have some fun on the weekend

## Getting Started

These instructions will get you the project up and running on your local machine for development and testing purposes.

### Prerequisites

#### Node

Install and/or use Node v8.9.1 if you don't have it already.

```
nvm install 8.9.1
nvm use 8.9.1
```

#### Yarn

Install yarn if you don't have it already.

`brew install yarn`

If you don't have brew install that first: [https://brew.sh/](https://brew.sh/)/


### Installing

Install the dependencies with `yarn`.

Open 2 tabs in your terminal and make sure you `nvm use 8.9.1` in both of them.

In the first tab, run the development server with `yarn server`.
In the second tab, run the frontend application `yarn dev`.

The app should be running on [http://localhost:8080/](http://localhost:8080/).

**Important**: If data is not loading, make sure both the server and the app is running!

### Running the tests

`yarn test`

It will also show the test coverage of the application.

You can also run the tests in watch mode `yarn test-watch`.

### How to make a build

To make a build, run the following command: `yarn build`.

It will take a couple of seconds, but eventually it will make a build into `/dist` folder.

### Linting

This project uses ESLint to enforce code standards across the app.