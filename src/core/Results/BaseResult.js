export class BaseResult{
    constructor(status,message) {
        this.status = status;
        this.message = message;
    } 

    setStatus(status) {
        this.status = status;
    }

    setMessage(message) {
        this.message = message;
    }

    getStatus() {
        return this.status;
    }

    getMessage() {
        return this.message;
    }

}
