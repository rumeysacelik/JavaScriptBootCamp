import { BaseResult } from "./BaseResult.js";

export default class ErrorResults extends BaseResult{
    constructor(message) {
        super(false,message);
    }
}