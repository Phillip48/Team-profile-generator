//require
const Manager = require('../lib/manager')
const Employee = require('../lib/employee')
// can set office number
describe('Set office number via constructor', () => {
    const office = 100;
    const e = new Manager('Ricky', 1, 'ricky@doge.com', office)
    expect(e.officaNumber).toBe(testVal);
})


//role returns manager