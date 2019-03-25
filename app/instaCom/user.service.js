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
        return this.http.post("http://326spain.com/instaCom/sendToken.php", dadesJSON, { headers: this.createRequestHeader() });
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
            return { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json',
                    'Authorization': appSettings.getString("token") }) };
        }
        else {
            return { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
        }
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUUvRCxtRUFBcUU7QUFDckUsb0NBQW9DO0FBR3BDO0lBQ0kscUJBQW9CLElBQWU7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFXO0lBQUUsQ0FBQztJQUV0QyxrQ0FBWSxHQUFaO1FBQ0ksSUFBSSxNQUFNLEdBQUcsd0NBQXdDLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsU0FBUztRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxFQUFFLFNBQVMsRUFDckQsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBRTNELENBQUM7SUFFTCxvQ0FBYyxHQUFkLFVBQWUsU0FBUztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDRDQUE0QyxFQUFFLFNBQVMsRUFDekQsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBRTNELENBQUM7SUFFRyx5Q0FBbUIsR0FBM0I7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzFCLGNBQWMsRUFBRSxrQkFBa0I7U0FDckMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELHFDQUFlLEdBQWY7UUFDSSxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUc7WUFDakMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCO29CQUN0RSxlQUFlLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNwRDthQUFNO1lBQ1AsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FBRTtJQUN0RixDQUFDO0lBbkNRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FFZ0IsaUJBQVU7T0FEMUIsV0FBVyxDQW9DdkI7SUFBRCxrQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbi8vaW1wb3J0IHsgSW1hZ2VzIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQpe31cblxuICAgIGdldEFsbEltYWdlcygpIHtcbiAgICAgICAgbGV0IHNlcnZlciA9IFwiaHR0cDovLzMyNnNwYWluLmNvbS9pbnN0YUNvbS9pbmRleC5waHBcIjtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoc2VydmVyLCB7aGVhZGVyczogdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCl9KTtcbiAgICB9XG5cbiAgICBwb3N0RGFkZXNBamF4KGRhZGVzSlNPTikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vMzI2c3BhaW4uY29tL2luc3RhQ29tL215QVBJLnBocFwiLCBkYWRlc0pTT04sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcnM6IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpfSk7XG5cbiAgICAgICAgfVxuXG4gICAgcG9zdERhZGVzQWpheDIoZGFkZXNKU09OKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcImh0dHA6Ly8zMjZzcGFpbi5jb20vaW5zdGFDb20vc2VuZFRva2VuLnBocFwiLCBkYWRlc0pTT04sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcnM6IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpfSk7XG5cbiAgICAgICAgfVxuICAgIFxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdEhlYWRlcigpIHtcbiAgICAgICAgLy8gc2V0IGhlYWRlcnMgaGVyZSBlLmcuXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUhlYWRlcnMoKSB7XG4gICAgICAgIGlmIChhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ0b2tlblwiKSApIHtcbiAgICAgICAgICAgIHJldHVybiB7IGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRva2VuXCIpIH0pIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSB9OyB9ICAgIFxuICAgIH1cbn0iXX0=