require('dotenv').config()

const CompressorService = require('./services/Compressor');
const MongoService = require('./services/Mongo');
const NameGeneratorService = require('./services/NameGenerator');
const UploadService = require('./services/Upload');
const CleanerService = require('./services/Cleaner');

const exec = require('child_process').exec;
const zipFolder = require('zip-a-folder');
const uptoboxAPI = require('@juliendu11/uptoboxapi');
const fs = require('fs');

const mongoConfig = require('./config/mongo')
const uptoboxToken = require('./config/uptobox');
const NameGenerator = require('./services/NameGenerator');

console.log(`Launched on: ${process.env.NODE_ENV}`)

console.log(mongoConfig)

const nameGeneratorService = new NameGeneratorService();
const mongoServiceInstance = new MongoService(mongoConfig, exec);
const compressorServiceInstance = new CompressorService(zipFolder);
const uploadServiceInstance = new UploadService(uptoboxAPI, uptoboxToken);

(async () => {
    try {
        const name = nameGeneratorService.getName();

        const savedDatabaseFolder = process.env.OUTPUT_FOLDER + name;
        const savedDatabaseFolderArchived = savedDatabaseFolder + ".zip";

        await mongoServiceInstance.saveDatabase(process.env.DATABASE_TO_SAVE, savedDatabaseFolder);
        await compressorServiceInstance.compress(savedDatabaseFolder, savedDatabaseFolderArchived);
        const upload = await uploadServiceInstance.uploadFile(savedDatabaseFolderArchived);
        console.log(upload);

        await CleanerService.deleteFile(fs, savedDatabaseFolderArchived);
        await CleanerService.deleteFolder(fs, savedDatabaseFolder);
    } catch (error) {
        console.error(error);
    }
})();