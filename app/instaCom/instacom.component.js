"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
var InstacomComponent = /** @class */ (function () {
    function InstacomComponent(_userService) {
        this._userService = _userService;
        this.title = "INSTACOM";
        this.images = [];
    }
    InstacomComponent.prototype.ngOnInit = function () {
    };
    InstacomComponent.prototype.getImagesListAPI = function () {
        var _this = this;
        this._userService.getAllImages().subscribe(function (res) {
            console.log(res);
            _this.images = res["respuesta"];
        }, function (error) {
            console.log("-------");
            console.log(error);
        });
    };
    InstacomComponent.prototype.showInformation = function () {
        console.log(this.name);
        console.log(this.pass);
    };
    InstacomComponent = __decorate([
        core_1.Component({
            selector: "nuevo-tag",
            moduleId: module.id,
            templateUrl: "./instacom.component.html",
            styleUrls: ["./instacom.component.css"],
            providers: [user_service_1.UserService]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], InstacomComponent);
    return InstacomComponent;
}());
exports.InstacomComponent = InstacomComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFjb20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5zdGFjb20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELCtDQUE2QztBQVkzQztJQU9FLDJCQUFxQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQU45QyxVQUFLLEdBQUcsVUFBVSxDQUFDO1FBSW5CLFdBQU0sR0FBYSxFQUFFLENBQUM7SUFFMEIsQ0FBQztJQUVqRCxvQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUdELDRDQUFnQixHQUFoQjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQ3RDLFVBQUMsR0FBRztZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUFDLFVBQUMsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCwyQ0FBZSxHQUFmO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQTVCVSxpQkFBaUI7UUFQL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxXQUFXO1lBQ3BCLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixXQUFXLEVBQUMsMkJBQTJCO1lBQ3ZDLFNBQVMsRUFBQyxDQUFDLDBCQUEwQixDQUFDO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FFM0IsQ0FBQzt5Q0FPcUMsMEJBQVc7T0FQbkMsaUJBQWlCLENBOEIvQjtJQUFELHdCQUFDO0NBQUEsQUE5QkMsSUE4QkQ7QUE5QmMsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7IGltYWdlcyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6XCJudWV2by10YWdcIixcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6XCIuL2luc3RhY29tLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOltcIi4vaW5zdGFjb20uY29tcG9uZW50LmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV1cblxufSlleHBvcnQgY2xhc3MgSW5zdGFjb21Db21wb25lbnR7XG4gICAgdGl0bGUgPSBcIklOU1RBQ09NXCI7XG4gICAgbmFtZTpzdHJpbmc7XG4gICAgcGFzczpzdHJpbmc7XG4gICAgXG4gICAgaW1hZ2VzOiBpbWFnZXNbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSl7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG5cbiAgICBnZXRJbWFnZXNMaXN0QVBJKCkge1xuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5nZXRBbGxJbWFnZXMoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlcyA9IHJlc1tcInJlc3B1ZXN0YVwiXTtcbiAgICAgICAgICAgIH0sKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzaG93SW5mb3JtYXRpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFzcyk7XG4gICAgfVxuXG59Il19