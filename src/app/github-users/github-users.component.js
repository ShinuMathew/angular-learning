"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GithubUsersComponent = void 0;
var core_1 = require("@angular/core");
var GithubUsersComponent = /** @class */ (function () {
    function GithubUsersComponent(route, githubUsersService, githubFollowersService) {
        var _this = this;
        this.route = route;
        this.githubUsersService = githubUsersService;
        this.githubFollowersService = githubFollowersService;
        this.username = "";
        this.nextUser = "";
        this.nextUserId = "";
        this.prevUser = "";
        this.prevUserId = "";
        this.userProfile = {};
        this.followers = [];
        this.route.paramMap.subscribe(function (params) {
            _this.username = params.get("username");
            _this.githubUsersService.getSpecific(_this.username).subscribe(function (users) { return _this.userProfile = users; });
        });
    }
    GithubUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("GithubUsersComponent onInit()");
        this.githubFollowersService.getFollowers().subscribe(function (followers) {
            _this.followers = followers;
            // console.log(this.followers)
        });
    };
    GithubUsersComponent.prototype.setUsers = function (direction) {
        var _this = this;
        var currenuser = this.followers.filter(function (follower) { return follower.login == _this.username; });
        var index = this.followers.indexOf(currenuser[0]);
        if (this.followers.length > 0) {
            // console.log(this.followers.indexOf(this.followers[index + 1]))
            if (index === 0) {
                this.nextUser = this.followers[index + 1]['login'];
                this.nextUserId = this.followers[index + 1]['id'];
                this.prevUser = this.followers[this.followers.length - 1]['login'];
                this.prevUserId = this.followers[this.followers.length - 1]['id'];
            }
            else if (index === this.followers.length - 1) {
                this.nextUser = this.followers[0]['login'];
                this.nextUserId = this.followers[0]['id'];
                this.prevUser = this.followers[index - 1]['login'];
                this.prevUserId = this.followers[index - 1]['id'];
            }
            else {
                this.nextUser = this.followers[index + 1]['login'];
                this.nextUserId = this.followers[index + 1]['id'];
                this.prevUser = this.followers[index - 1]['login'];
                this.prevUserId = this.followers[index - 1]['id'];
            }
        }
        if (direction === "NEXT")
            return this.nextUser;
        else
            return this.prevUser;
    };
    GithubUsersComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-github-users',
            templateUrl: './github-users.component.html',
            styleUrls: ['./github-users.component.css']
        })
    ], GithubUsersComponent);
    return GithubUsersComponent;
}());
exports.GithubUsersComponent = GithubUsersComponent;
