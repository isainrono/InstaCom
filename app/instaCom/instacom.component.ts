import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";
import { images } from "./images";
import * as dialogs from "tns-core-modules/ui/dialogs";


@Component({
    selector:"nuevo-tag",
    moduleId:module.id,
    templateUrl:"./instacom.component.html",
    styleUrls:["./instacom.component.css"],
    providers: [UserService]

})export class InstacomComponent{
    title = "INSTACOM";
    name:string;
    pass:string;
    
    images: images[] = [];

    constructor (private _userService: UserService){}

    ngOnInit(): void {
    }


    getImagesListAPI() {
        this._userService.getAllImages().subscribe(
            (res) => {
                console.log(res);
                this.images = res["respuesta"];
            },(error) => {
                console.log("-------");
                console.log(error);
            }
        );
    }

    showInformation() {
        console.log(this.name);
        console.log(this.pass);
    }

}