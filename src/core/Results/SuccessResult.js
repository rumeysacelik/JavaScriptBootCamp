import { BaseResult } from "./BaseResult.js";

export default class SuccessResults extends BaseResult{
    constructor(message) {
        super(true,message);
    }
}