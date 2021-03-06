"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Eyal Vardi on 5/03/2016.
 */
var core_1 = require("@angular/core");
var Global_1 = require("ngEx/Global");
//declare var __moduleName:string;
var User = (function () {
    function User() {
    }
    __decorate([
        core_1.Input('source'), 
        __metadata('design:type', Object)
    ], User.prototype, "user", void 0);
    User = __decorate([
        Global_1.Global(),
        core_1.Component({
            selector: 'user-profile',
            moduleId: module.id,
            //template:``,
            //styleUrls:['user.css'],
            templateUrl: 'User.html'
        }), 
        __metadata('design:paramtypes', [])
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map