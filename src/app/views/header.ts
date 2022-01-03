import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/authService";
import { Router } from "@angular/router";
//import { MatIconModule } from "@angular/material/icon";
//import { MatIconRegistry } from "@angular/material/icon";
//import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: "app-header",
    templateUrl: "header.html",
    styleUrls: ["header.css"]
})
export default class Header  {
    constructor(public authService: AuthService, private router: Router) { 
    }

    onLogOut(): void {
        this.authService.logout();
        this.router.navigate([""]);
    }
}