const MongoService = require('../../services/Mongo');
const NameGenerator = require('../../services/NameGenerator');
const fs = require('fs')
const config = require('../../config/mongo')
const exec = require('child_process').exec;

const { MongoClient } = require('mongodb');

describe('Unit test for Mongo service', () => {
    let connection;
    let db;

    const fakeEntityFolder = "./test_entity2"

    beforeAll(async () => {
        if (!fs.existsSync(fakeEntityFolder)){
            fs.mkdirSync(fakeEntityFolder);
        }
        connection = await MongoClient.connect(`mongodb://localhost:27017/`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        db = await connection.db();
    });

    beforeEach(async () => {
        await db.collection('users').deleteMany({});
    })

    afterAll(async () => {
        await connection.close();
        if (fs.existsSync(fakeEntityFolder)){
            fs.rmdirSync(fakeEntityFolder, {recursive:true});
        }
    });
    it('Should create folder for output', async () => {

        config.HOST = "localhost";
        config.PASSWORD = "";
        config.ID = "";
        config.PORT = 27017;

        const users = db.collection('users');
        const mockUser = {_id: 'some-user-id', name: 'John'};
        await users.insertOne(mockUser);

        const mongoServiceInstance = new MongoService(config, exec);
        const nameGeneratorServiceInstance = new NameGenerator();

        const output = fakeEntityFolder + "/" + nameGeneratorServiceInstance.getName();

        await mongoServiceInstance.saveDatabase('test', output);

        expect(fs.existsSync(output)).toBe(true);
    })
})