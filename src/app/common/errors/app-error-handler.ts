import { ErrorHandler } from "@angular/core";
import { UNEXPECTED_ERROR } from "./errors";

export class AppErrorHandler implements ErrorHandler {

    handleError(error: any) {
        console.log(error);
        // alert(UNEXPECTED_ERROR.message)
    }
}