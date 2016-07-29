# Process Tracker

[![Build Status](https://travis-ci.org/coryellenberger/process-tracker.svg?branch=master)](https://travis-ci.org/coryellenberger/process-tracker) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

AngularJS Style Guide: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

#### Initializing Project
This will install all of the node modules for this project
After node modules it will run gulp to execute bower bringing in client components
`$ npm install`

#### Start Project
This will start the node express server on port 3000 
`$ npm start`
You can then go to localhost:3000

#### Mocking a Heroku Release
delete the node_modules and public/components folder then run the following command
`npm install --quiet --production`

#### get JSDocs
`jsdoc ./src/ -r`