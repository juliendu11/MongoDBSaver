[![Build Status](https://travis-ci.org/juliendu11/MongoDBSaver.svg?branch=main)](https://travis-ci.org/juliendu11/MongoDBSaver)

# MongoDBSaver
Allows to save a mongoDB database and upload it to Uptobox in zip format

## Install

Just git clone or download project


## How to use ?

#### Create an .env file in the root
````javascript
UPTOBOX_TOKEN=''

DATABASE_HOST=''
DATABASE_PORT=''
DATABASE_ID='' //if required
DATABASE_PASSWORD='' //if required

OUTPUT_FOLDER='' // where your database will be saved, 1 folder and a .zip file will be created 
                 // in this output but they will be deleted once the .zip file has been uploaded
                 // example: '/home/julien/Desktop/'
````

#### Launch

Launch with ***node index.js*** or ***use cron system*** for scheduling this


## Requirements

- [mongodump](https://docs.mongodb.com/manual/reference/program/mongodump/) Installed in your device

## Dependencies

- [dotenv](https://www.npmjs.com/package/dotenv)
- [@juliendu11/uptoboxapi](https://www.npmjs.com/package/@juliendu11/uptoboxapi)
- [zip-a-folder](https://www.npmjs.com/package/zip-a-folder)

## Dev Dependencies

- [jest](https://www.npmjs.com/package/jest)
- [mongodb](https://www.npmjs.com/package/mongodb)
- [mongodb-memory-server](https://www.npmjs.com/package/mongodb-memory-server)
- [mockdate](https://www.npmjs.com/package/mockdate)
