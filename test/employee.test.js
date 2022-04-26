// require
const { it } = require('jest-circus');
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
        const e = new Employee('rocket', id);
        expect(e.id).toBe(id);
    })
    // set email via constructor args
    it('Can set email with the constructor args', () => {
        const email = 'ricky@doge.com';
        const e = new Employee('rocket', 645, email);
        expect(e.email).toBe(email);
    })
    
    // get name via constructor function
    it('Can get name with the constructor function', () => {
        const name = 'robin';
        const e = new Employee(name);
        const employeeName = e.getName();
        expect(employeeName).toBe(name)
    })
    // get id via constructor function
    it('Can get id with the constructor function', () => {
        const id = 6497;
        const e = new Employee('robin', id);
        const employeeId = e.getId();
        expect(employeeId).toBe(id)
    })
    // get email via constructor function
    it('Can get email with the constructor function', () => {
        const email = 'ricky@doge.com';
        const e = new Employee('ricky', 6497, email);
        const employeeEmail = e.getEmail();
        expect(employeeEmail).toBe(email)
    })
    // role function should return employee
})