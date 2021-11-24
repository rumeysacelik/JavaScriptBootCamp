export default class EmployeeService{
    constructor() {
        this.employees = []
        this.errors = []
    }


    //create method to add employee in database

    getById(id){
        return this.employees.find(employee => employee.id === id)
    }

    getEmployees(){
        return this.employees
    }

    addEmployee(employee){
        if(this.checkEmployeeValidityForErrors(employee)){
            return false
        }else{
            this.employees.push(employee)
            return true
        }
    }

    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(`${field} is required`)
            }
        }
        return hasErrors

    }
}

    //validate employee details required id f,name,salary,age,designation
    // checkEmployeeValidityForErrors(user) {
    //     let requiredFields = "id firstName lastName age city salary".split(" ")
    //     let hasErrors = false
    //     for (const field of requiredFields) {
    //         if (!user[field]) {
    //             hasErrors = true
    //             this.errors.push(
    //                 new DataError(`Validation problem. ${field} is required`, user))
    //         }
    //     }

    //     if (Number.isNaN(Number.parseInt(user.age))) {
    //         hasErrors = true
    //         this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
    //     }
    //     return hasErrors
    // }
        
    

