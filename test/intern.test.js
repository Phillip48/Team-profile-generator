// require
const Intern = require('../lib/intern')


describe('Intern', () => {
    it('Sets up the Interns school', () => {
        const school = 'UCF';
        const e = new Intern('Bob', 4567, 'bob@mainModule.com', school)
        expect(e).toBe(school);
    })
})