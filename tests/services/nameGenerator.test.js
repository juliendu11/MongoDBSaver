const NameGeneratorService = require('../../services/NameGenerator');
const { set, reset }  = require('mockdate');

describe('Unit test for Name Generator service', () => {
    afterEach(() => {
        reset();
    })

    it('Should generate a string name', () => {
        const nameGeneratorServiceInstance = new NameGeneratorService();
    
        expect(nameGeneratorServiceInstance.getName()).not.toBeNull()
    })

    it('Should generate a string name equal [2020-09-06 18-30-00]database', () => {
        const nameGeneratorServiceInstance = new NameGeneratorService();

        set(new Date(2020, 8, 6, 18,30,0,0))

        expect(nameGeneratorServiceInstance.getName()).toBe('[2020-09-06 18-30-00]database')
    })

    it('Should generate a string name equal [2020-12-06 18-30-00]database.zip', () => {
        const nameGeneratorServiceInstance = new NameGeneratorService();

        set(new Date(2020, 11, 6, 18,30,0,0))

        expect(nameGeneratorServiceInstance.getName()).toBe('[2020-12-06 18-30-00]database')
    })

    it('Should generate a string name equal [2020-12-12 18-30-00]database.zip', () => {
        const nameGeneratorServiceInstance = new NameGeneratorService();

        set(new Date(2020, 11, 12, 18,30,0,0))

        expect(nameGeneratorServiceInstance.getName()).toBe('[2020-12-12 18-30-00]database')
    })
})