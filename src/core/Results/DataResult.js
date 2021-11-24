import { BaseResult } from "./BaseResult.js";

export default class DataResult extends BaseResult {
    constructor(data,status,message) {
        super(status,message);
        
            this.data = data;
        
        
    }

    setData(data) {
        this.data = data;
    }

    getData() {
        return this.data;
    }


}