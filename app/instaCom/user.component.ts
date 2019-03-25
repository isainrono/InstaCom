import { Component, OnInit } from "@angular/core";
import * as appSettings from "tns-core-modules/application-settings";
import { UserService } from "./user.service";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { user } from "./user";

@Component({
    selector:"nuevo-tag",
    moduleId:module.id,
    templateUrl:"./user.component.html",
    styleUrls:["./user.component.css"],
    providers: [UserService]
})
export class UserComponent{
    title = "USER";
    name:string;
    pass:string;
    user:user = new user();

    constructor(private _userService: UserService){}

    ngOnInit(): void {
    }

    showInformation() {
        console.log(this.name);
        console.log(this.pass);
        this.user.name = this.name;
        this.user.pass = this.pass;
    }

    sendPut() {
        this._userService.postDadesAjax(this.user)
        .subscribe(res=>{
            appSettings.setString("token", res["token"])
            console.log(res["token"]);
        });
    }

    sendToken() {
        console.log(appSettings.getString("token"));
        this._userService.postDadesAjax2(appSettings.getString("token"))
        .subscribe(res=>{
            console.log(res);
        });
    }

    // estamos en como enviar el token!!!


}