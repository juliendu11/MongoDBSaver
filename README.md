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
