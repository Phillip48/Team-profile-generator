// require
const Employee = require('../lib/employee')

// test can begin employee instance
describe('Employee', () => {
    it('Begin the instance of employee', () => {
        const e = new Employee();
        expect(typeof(e)).toBe('object');
    })
    // set name via construction arrays
    it('Can set a name with the constructor arguments', () => {
        const name = "rocket";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    })
    // set id via constructor args
    it('Can set id with the constructor args', () => {
        const id = '6794';
        const e = new Employee(id);
        expect(e.id).toBe(id);
    })
    // set email via constructor args
    it('Can set email with the constructor args', () => {
        const email = 'ricky@doge.com';
        const e = new Employee(email);
        expect(e.email).toBe(email);
    })
    
    // set name via constructor function
    it('Can set name with the constructor function', () => {
        const name = 'robin';
        const e = new Employee;
        expect(e).toBe(name)
    })
    // set id via constructor function
    it('Can set id with the constructor function', () => {
        
    })
    // set email via constructor function
    it('Can set email with the constructor function', () => {
        
    })
    // role function should return employee

})