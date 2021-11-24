
import DataError from "../models/dataError.js"

export default class UserService {
    constructor(loggerService) {
        this.loggerService = loggerService
    }

    load() {
        const data =  fetch('http://localhost:8080/users')
 .then(response => response.json())
 .catch(error => console.error('Error:', error))
 .then(response => console.log('Success:', JSON.stringify(response)));

    }

    //formik-yup

    add(user) {
        let data = {
            "id": 10,
            "firstName": "Selçuk",
            "lastName": "Bayraktar",
            "city": "Trabzon",
            "age": 36,
            "creditCardNumber": "123456",
            "type": "customer"
        }
           fetch('http://localhost:8080/users/', {
           method: "POST",
           headers: {
           "Content-Type": "application/json",
           },
           body: JSON.stringify(data),
           })
           .then(response => response.json())
           .catch(error => console.error('Error:', error))
           .then(response => console.log('Success:', JSON.stringify(response)));
    }

    

}