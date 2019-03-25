import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { InstacomComponent } from "./instaCom/instacom.component";
import { UserComponent } from "./instaCom/user.component";


const routes: Routes = [
    { path: "", redirectTo: "/user", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "instacom", component: InstacomComponent},
    { path: "user", component: UserComponent},
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }