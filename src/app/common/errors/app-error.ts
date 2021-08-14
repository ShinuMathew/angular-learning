export class AppError {

    constructor(public error: any) { }

    public getError() {
        return this.error
    }

    public getErrorMessage() {
        return this.error['error']['error']
    }
}