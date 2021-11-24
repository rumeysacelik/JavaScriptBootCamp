import { BaseResult } from "../core/Results/BaseResult.js"
import DataResult from "../core/Results/DataResult.js"
import SuccessResult from "../core/Results/successResult.js"
import ErrorResult from "../core/Results/ErrorResult.js"
import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import DataError from "../models/dataError.js"
import Employee from "../models/employee.js"
import customerService from "../services/customerService.js"
import EmployeeService from "../services/employeeService.js"
import UserService from "../services/userService.js"
import ResultEngine from "../core/engines/ResultEngine.js"
import CustomerValidate from "../core/validationRules/customValidate.js"
import EmployeeValidate from "../core/validationRules/EmployeeValidate.js"
import CustomerService from "../services/customerService.js"

// let res = new DataResult({
//     name: "test",
//     age: 10
// },true , "Success");

// console.log(res.getData());

// let res2 =  new SuccessResult(true,"Success");

// console.log(res2.getMessage());

// let res3 = new ErrorResult(false,"Error")

// console.log(res3.getMessage());

// let res4 = new DataResult({
//     name:"Ali",
//     age:20
// }, true, "Success");

// console.log(res4.getData());

let cs = new CustomerService();

cs.listCustomers();

let validateCustomer = new CustomerValidate();

let customer = new Customer(1,"Kemal","Çelik",34,23,56789976);
let test = validateCustomer.checkCustomerValidityForErrors(customer)

//console.log(test);


let validateEmployee = new EmployeeValidate();

let employee = new Employee(2,"Rümeysa","Çelik",10,19,3000);
let test2 = validateEmployee.checkEmployeeValidityForErrors(employee)
//console.log(test2);


let d = new ResultEngine()
console.log(d.runTheEngine(test,test2));

let us = new UserService();
us.load()

// us.add()






// console.log("User component yüklendi")

// let logger1 = new MongoLogger()
// let userService = new UserService(logger1)

// let user1 = new User(1,"Engin","Demiroğ","Ankara")
// let user2 = new User(2,"Baran","Gökçekli","Muğla")
// userService.add(user1)
// userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))

// let customer = {id:1, firstName:"Engin"}

// //prototyping
// customer.lastName = "Demiroğ"

// console.log(customer.lastName)

// console.log("--------------------------")
// userService.load()


// let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","fdgdfg");
// customerToAdd.type = "customer"



// userService.add(customerToAdd)
// console.log(userService.customers)
// console.log(userService.employees)
// console.log(userService.errors)


// EmployeeService.getById(2)

// console.log(customerService.getCustomerById(1))

// console.log(customerService.customers)



// EmployeeService.addEmployee(new Employee(1,"Seda","Yılmaz","Ankara","fdgdfg"))