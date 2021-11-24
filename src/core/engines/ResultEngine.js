import { BaseResult } from "../Results/BaseResult.js";
import DataResult from "../Results/DataResult.js";
import SuccessResults from "../Results/SuccessResult.js";

export default class ResultEngine{
    runTheEngine(...logics){
        for (const logic of logics) {
            if(logic instanceof BaseResult){
                if (!logic.getStatus()){
                    return logic;
                }
            }
            else{
                throw new Error("The object is not a Result");
            }
        }
        return new SuccessResults();

    }
}