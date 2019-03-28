import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "tns-core-modules/ui/page/page";
import * as appSettings from "tns-core-modules/application-settings";
//import { Images } from "./images";

@Injectable()
export class UserService {
    constructor(private http:HttpClient){}

    getAllImages() {
        let server = "http://326spain.com/instaCom/index.php";
        return this.http.get(server, {headers: this.createRequestHeader()});
    }

    postDadesAjax(dadesJSON) {
        return this.http.post("http://326spain.com/instaCom/myAPI.php", dadesJSON,
                            {headers: this.createRequestHeader()});

        }

    postDadesAjax2(dadesJSON) {
        return this.http.post("http://326spain.com/instaCom/sendToken.php", dadesJSON,
                            {headers: this.generateHeaders()});

        }
    
    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "Content-Type": "application/json",
        });

        return headers;
    }

    generateHeaders() {
        if (appSettings.getString("token") ) {
            console.log("genero cabecera con token:"+appSettings.getString("token"));
            return  new HttpHeaders({ 'Content-Type': 'application/json',
            'Authorization': appSettings.getString("token") }) ;
            } else {
            return  new HttpHeaders({ 'Content-Type': 'application/json' }) };    
    }
}