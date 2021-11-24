import User from "../../models/user.js";
import ErrorResults from "../Results/ErrorResult.js";
import SuccessResults from "../Results/SuccessResult.js";

export default class CustomerValidate{
    checkCustomerValidityForErrors(user) {
        if(user instanceof User){
            let requiredFields = "id firstName lastName age city creditCardNumber".split(" ")
        for (const field of requiredFields) {
            if (!user[field]) {
               
                return new ErrorResults(`Validation problem. ${field} is required`)
            }
        }
    
        if (Number.isNaN(Number.parseInt(+user.age))) {
            return new ErrorResults(`Validation problem. ${user.age} is not a number`)
        }
        return new SuccessResults();
        }
        else{
            throw new Error("Validation problem. User is not an instance of User")
        }
    
    }
}