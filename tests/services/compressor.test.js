const CompressorService = require('../../services/Compressor');
const zipFolder = require('zip-a-folder');
const fs = require('fs');

describe('Unit test for Compressor service', () => {
    const fakeEntityFolder = "./test_entity1"
    beforeAll(() => {
        if (!fs.existsSync(fakeEntityFolder)) {
            fs.mkdirSync(fakeEntityFolder);
        }
    })

    afterAll(() => {
        if (fs.existsSync(fakeEntityFolder)) {
            fs.rmdirSync(fakeEntityFolder, { recursive: true });
        }
    })

    it('Should compress folder to zip archive', async () => {
        const compressorServiceInstance = new CompressorService(zipFolder);

        const dir = fakeEntityFolder + '/database';
        const output = fakeEntityFolder + '/database.zip';

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        await compressorServiceInstance.compress(dir, output)
        expect(fs.existsSync(output)).toBe(true)
    })
})