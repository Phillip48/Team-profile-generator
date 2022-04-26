const Engineer = require('../lib/engineer')


describe('Engineer', () => {
    it('Sets up the engineers github', () => {
        const userName = 'something48';
        const e = new Engineer('Bob', 4567, 'bob@mainModule.com', userName)
        expect(e).toBe(userName);
    })
})