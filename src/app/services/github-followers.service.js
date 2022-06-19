"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GithubFollowersService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var data_service_1 = require("./data.service");
var GithubFollowersService = /** @class */ (function (_super) {
    __extends(GithubFollowersService, _super);
    function GithubFollowersService(http) {
        return _super.call(this, "https://api.github.com/users/ShinuMathew/followers", http) || this;
    }
    GithubFollowersService.prototype.getFollowers = function () {
        return this.getAll().pipe((0, operators_1.map)(this.mapGithubFollowers));
    };
    GithubFollowersService.prototype.mapGithubFollowers = function (followers) {
        var githubFollower = [];
        followers.forEach(function (follower) { return githubFollower.push({
            id: follower.id,
            avatarUrl: follower.avatar_url,
            followersUrl: follower.followers_url,
            htmlUrl: follower.html_url,
            login: follower.login
        }); });
        return githubFollower;
    };
    GithubFollowersService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], GithubFollowersService);
    return GithubFollowersService;
}(data_service_1.DataService));
exports.GithubFollowersService = GithubFollowersService;
