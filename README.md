# Instaclone Server

## APPROACH

### Setup MongoDB database for windows

* Installed npm
`npm install`


* Installed dev dependencies
`npm install --save-dev babel babel-cli babel-preset-es2015 babel-preset-stage-0 nodemon`

* Installed the remaining dependencies
`npm install --save body-parser express moment mongoose morgan`

### Give the database data

* Setup a populate.js file with user data.

* Saved that data to the mongodb database by running:
`node_modules/babel-cli/bin/babel-node.js populate.js`
