"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var not_found_error_1 = require("../common/errors/app-errors/not-found-error");
var bad_request_error_1 = require("../common/errors/app-errors/bad-request-error");
var unexpected_error_1 = require("../common/errors/app-errors/unexpected-error");
var DataService = /** @class */ (function () {
    function DataService(url, http) {
        this.url = url;
        this.http = http;
    }
    DataService.prototype.getAll = function () {
        return this.http.get(this.url).pipe(
        // map((res: Response) => res.json()),
        (0, operators_1.catchError)(this._handleError), (0, operators_1.retry)(2));
    };
    DataService.prototype.getSpecific = function (resourceId) {
        return this.http.get("".concat(this.url, "/").concat(resourceId)).pipe((0, operators_1.catchError)(this._handleError));
    };
    DataService.prototype.post = function (resource) {
        return this.http.post(this.url, resource).pipe((0, operators_1.catchError)(this._handleError));
    };
    DataService.prototype.put = function (resourceId, resource) {
        return this.http.put("".concat(this.url, "/").concat(resourceId), resource).pipe((0, operators_1.catchError)(this._handleError));
    };
    DataService.prototype["delete"] = function (resourceId) {
        return this.http["delete"]("".concat(this.url, "/").concat(resourceId)).pipe((0, operators_1.catchError)(this._handleError));
    };
    DataService.prototype._handleError = function (error) {
        switch (error.status) {
            case 400:
                return (0, rxjs_1.throwError)(new bad_request_error_1.BadRequestError(error));
            case 404:
                return (0, rxjs_1.throwError)(new not_found_error_1.NotFoundError(error));
            case 500:
                return (0, rxjs_1.throwError)(new unexpected_error_1.UnexpectedError(error));
            default:
                return (0, rxjs_1.throwError)(new unexpected_error_1.UnexpectedError(error));
        }
    };
    DataService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
