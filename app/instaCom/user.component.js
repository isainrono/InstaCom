"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("tns-core-modules/application-settings");
var user_service_1 = require("./user.service");
var user_1 = require("./user");
var UserComponent = /** @class */ (function () {
    function UserComponent(_userService) {
        this._userService = _userService;
        this.title = "USER";
        this.user = new user_1.user();
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.showInformation = function () {
        console.log(this.name);
        console.log(this.pass);
        this.user.name = this.name;
        this.user.pass = this.pass;
    };
    UserComponent.prototype.sendPut = function () {
        this._userService.postDadesAjax(this.user)
            .subscribe(function (res) {
            appSettings.setString("token", res["token"]);
            console.log(res["token"]);
        });
    };
    UserComponent.prototype.sendToken = function () {
        console.log(appSettings.getString("token"));
        this._userService.postDadesAjax2(appSettings.getString("token"))
            .subscribe(function (res) {
            console.log(res);
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: "nuevo-tag",
            moduleId: module.id,
            templateUrl: "./user.component.html",
            styleUrls: ["./user.component.css"],
            providers: [user_service_1.UserService]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtRUFBcUU7QUFDckUsK0NBQTZDO0FBRTdDLCtCQUE4QjtBQVM5QjtJQU1JLHVCQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUw3QyxVQUFLLEdBQUcsTUFBTSxDQUFDO1FBR2YsU0FBSSxHQUFRLElBQUksV0FBSSxFQUFFLENBQUM7SUFFd0IsQ0FBQztJQUVoRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3pDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDVixXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQy9ELFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWhDUSxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsV0FBVztZQUNwQixRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsV0FBVyxFQUFDLHVCQUF1QjtZQUNuQyxTQUFTLEVBQUMsQ0FBQyxzQkFBc0IsQ0FBQztZQUNsQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1NBQzNCLENBQUM7eUNBT29DLDBCQUFXO09BTnBDLGFBQWEsQ0FxQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyB1c2VyIH0gZnJvbSBcIi4vdXNlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjpcIm51ZXZvLXRhZ1wiLFxuICAgIG1vZHVsZUlkOm1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDpcIi4vdXNlci5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczpbXCIuL3VzZXIuY29tcG9uZW50LmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVXNlckNvbXBvbmVudHtcbiAgICB0aXRsZSA9IFwiVVNFUlwiO1xuICAgIG5hbWU6c3RyaW5nO1xuICAgIHBhc3M6c3RyaW5nO1xuICAgIHVzZXI6dXNlciA9IG5ldyB1c2VyKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2Upe31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIHNob3dJbmZvcm1hdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wYXNzKTtcbiAgICAgICAgdGhpcy51c2VyLm5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIHRoaXMudXNlci5wYXNzID0gdGhpcy5wYXNzO1xuICAgIH1cblxuICAgIHNlbmRQdXQoKSB7XG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLnBvc3REYWRlc0FqYXgodGhpcy51c2VyKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcz0+e1xuICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidG9rZW5cIiwgcmVzW1widG9rZW5cIl0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNbXCJ0b2tlblwiXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbmRUb2tlbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidG9rZW5cIikpO1xuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5wb3N0RGFkZXNBamF4MihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ0b2tlblwiKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXM9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGVzdGFtb3MgZW4gY29tbyBlbnZpYXIgZWwgdG9rZW4hISFcblxuXG59Il19