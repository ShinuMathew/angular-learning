"use strict";
exports.__esModule = true;
exports.AppError = void 0;
var AppError = /** @class */ (function () {
    function AppError(error) {
        this.error = error;
    }
    AppError.prototype.getError = function () {
        return this.error;
    };
    AppError.prototype.getErrorMessage = function () {
        return this.error['error']['error'];
    };
    return AppError;
}());
exports.AppError = AppError;
