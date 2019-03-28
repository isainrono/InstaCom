"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var appSettings = require("tns-core-modules/application-settings");
//import { Images } from "./images";
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAllImages = function () {
        var server = "http://326spain.com/instaCom/index.php";
        return this.http.get(server, { headers: this.createRequestHeader() });
    };
    UserService.prototype.postDadesAjax = function (dadesJSON) {
        return this.http.post("http://326spain.com/instaCom/myAPI.php", dadesJSON, { headers: this.createRequestHeader() });
    };
    UserService.prototype.postDadesAjax2 = function (dadesJSON) {
        return this.http.post("http://326spain.com/instaCom/sendToken.php", dadesJSON, { headers: this.generateHeaders() });
    };
    UserService.prototype.createRequestHeader = function () {
        // set headers here e.g.
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json",
        });
        return headers;
    };
    UserService.prototype.generateHeaders = function () {
        if (appSettings.getString("token")) {
            console.log("genero cabecera con token:" + appSettings.getString("token"));
            return new http_1.HttpHeaders({ 'Content-Type': 'application/json',
                'Authorization': appSettings.getString("token") });
        }
        else {
            return new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        }
        ;
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUUvRCxtRUFBcUU7QUFDckUsb0NBQW9DO0FBR3BDO0lBQ0kscUJBQW9CLElBQWU7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFXO0lBQUUsQ0FBQztJQUV0QyxrQ0FBWSxHQUFaO1FBQ0ksSUFBSSxNQUFNLEdBQUcsd0NBQXdDLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsU0FBUztRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxFQUFFLFNBQVMsRUFDckQsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBRTNELENBQUM7SUFFTCxvQ0FBYyxHQUFkLFVBQWUsU0FBUztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDRDQUE0QyxFQUFFLFNBQVMsRUFDekQsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFDLENBQUMsQ0FBQztJQUV2RCxDQUFDO0lBRUcseUNBQW1CLEdBQTNCO1FBQ0ksd0JBQXdCO1FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsQ0FBQztZQUMxQixjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxxQ0FBZSxHQUFmO1FBQ0ksSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFHO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLE9BQVEsSUFBSSxrQkFBVyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQjtnQkFDNUQsZUFBZSxFQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFFO1NBQ25EO2FBQU07WUFDUCxPQUFRLElBQUksa0JBQVcsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUE7U0FBRTtRQUFBLENBQUM7SUFDMUUsQ0FBQztJQXBDUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBRWdCLGlCQUFVO09BRDFCLFdBQVcsQ0FxQ3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG4vL2ltcG9ydCB7IEltYWdlcyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KXt9XG5cbiAgICBnZXRBbGxJbWFnZXMoKSB7XG4gICAgICAgIGxldCBzZXJ2ZXIgPSBcImh0dHA6Ly8zMjZzcGFpbi5jb20vaW5zdGFDb20vaW5kZXgucGhwXCI7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHNlcnZlciwge2hlYWRlcnM6IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpfSk7XG4gICAgfVxuXG4gICAgcG9zdERhZGVzQWpheChkYWRlc0pTT04pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovLzMyNnNwYWluLmNvbS9pbnN0YUNvbS9teUFQSS5waHBcIiwgZGFkZXNKU09OLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJzOiB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKX0pO1xuXG4gICAgICAgIH1cblxuICAgIHBvc3REYWRlc0FqYXgyKGRhZGVzSlNPTikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vMzI2c3BhaW4uY29tL2luc3RhQ29tL3NlbmRUb2tlbi5waHBcIiwgZGFkZXNKU09OLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJzOiB0aGlzLmdlbmVyYXRlSGVhZGVycygpfSk7XG5cbiAgICAgICAgfVxuICAgIFxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdEhlYWRlcigpIHtcbiAgICAgICAgLy8gc2V0IGhlYWRlcnMgaGVyZSBlLmcuXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUhlYWRlcnMoKSB7XG4gICAgICAgIGlmIChhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ0b2tlblwiKSApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJvIGNhYmVjZXJhIGNvbiB0b2tlbjpcIithcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ0b2tlblwiKSk7XG4gICAgICAgICAgICByZXR1cm4gIG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRva2VuXCIpIH0pIDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gIG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSkgfTsgICAgXG4gICAgfVxufSJdfQ==