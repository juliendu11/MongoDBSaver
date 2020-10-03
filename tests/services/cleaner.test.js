const CleanerService = require('../../services/Cleaner')
const fs = require('fs');

describe('Unit test for Cleaner service', () => {
    const fakeEntityFolder = "./test_entity"
    beforeAll(() => {
        if (!fs.existsSync(fakeEntityFolder)){
            fs.mkdirSync(fakeEntityFolder);
        }
    })

    afterAll(()=> {
        if (fs.existsSync(fakeEntityFolder)){
            fs.rmdirSync(fakeEntityFolder, {recursive:true});
        }
    })

    it('Should delete file because file exist', async () => {
        const file =  fakeEntityFolder + '/test.monapp';

        fs.writeFileSync(file, 'hello');

        expect(fs.existsSync(file)).toBe(true);

        await CleanerService.deleteFile(fs, file);

        expect(fs.existsSync(file)).toBe(false);
    })

    it('Should delete folder because folder exist', async () => {
        const folder = fakeEntityFolder + '/FolderTest';

        fs.mkdirSync(folder);

        expect(fs.existsSync(folder)).toBe(true);

        await CleanerService.deleteFolder(fs, folder);

        expect(fs.existsSync(folder)).toBe(false);
    })

    it('Should delete folder because folder exist with 2 files in this ', async () => {
        const folder = fakeEntityFolder + '/FolderTest2';

        const file1 = folder + "/file1.txt"
        const file2 = folder + "/file2.txt"

        fs.mkdirSync(folder);
        fs.writeFileSync(file1, 'Hello');
        fs.writeFileSync(file2, 'Hello');

        expect(fs.existsSync(folder)).toBe(true);
        expect(fs.existsSync(file1)).toBe(true);
        expect(fs.existsSync(file2)).toBe(true);

        await CleanerService.deleteFolder(fs, folder);

        expect(fs.existsSync(folder)).toBe(false);
        expect(fs.existsSync(file1)).toBe(false);
        expect(fs.existsSync(file2)).toBe(false);
    })

    it('Should return false because file not exist', async () => {
        const file ="uploads/file1.txt";

        const exist = await CleanerService.checkExist(fs, file);

        expect(exist).toBe(false);
    })

    it('Should return true because file exist', async () => {
        const folder = fakeEntityFolder + '/FolderTest2';
        const file1 = folder + "/file1.txt"

        fs.mkdirSync(folder);
        fs.writeFileSync(file1, 'Hello');

        const exist = await CleanerService.checkExist(fs, file1);

        expect(exist).toBe(true);
    })

    it('Should return false because folder not exist', async () => {
        const folder = fakeEntityFolder + '/FolderTest3';

        const exist = await CleanerService.checkExist(fs, folder);

        expect(exist).toBe(false);
    })

    it('Should return true because folder exist', async () => {
        const folder = fakeEntityFolder + '/FolderTest4';

        fs.mkdirSync(folder);

        const exist = await CleanerService.checkExist(fs, folder);

        expect(exist).toBe(true);
    })
})