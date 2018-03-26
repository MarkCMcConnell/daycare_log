# Daycare Provider Activity Log

This app was created at the request of a in-home daycare provider in an effort to go paperless in her daily reporting to parents.  I decided to create the app in React UI and an Express backend for an email API.  The app is currently hosted on Heroku.

## Getting Started

- Fork or clone the repo into your local directory.
- Type `npm install` to download dependencies listed in `package.json`.
- Use `npm run start` to start a development webserver.
- Use `npm run build` to have webpack bundle the resources into production ready, compressed files contained in a `dist` directory.
- Use `npm run lint` to initiate `eslint` features to help keep your code clean.

### Prerequisites

This project requires NodeJs at least `v8.7.0` and npm `5.6.0` to guarantee the code will run as is.

## Running tests

Testing is not included in this app as of yet.  Feel free to add your own test suite and modify the `package.json` script `lint` to enable your tests.

## Deployment

Currently, this page is hosted on Heroku through the Heroku CLI.  You can choose to host anywhere you like, but it requires separating the front end (in `src` directory) `package.json` from the server (root directory) `package.json`.

## Built With

* React (https://reactjs.org/) - UI library
* PostCSS (https://github.com/postcss/postcss) - CSS preprocessor
* CSS Modules (https://github.com/css-modules/css-modules) - Modular CSS per component
* Express (https://expressjs.com/) - Web framework for Node.js
* Nodemailer (https://nodemailer.com/about/) - NodeJs-based email serving package
* webpack (https://webpack.js.org/) - Module bundler

## Author

* **Mark McConnell** - *Creator* - (https://github.com/korrollir)
