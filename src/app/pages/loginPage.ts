import { Component } from "@angular/core";
import { AuthService } from "../services/authService";
import { Router } from "@angular/router";
import { LoginRequest } from "../shared/LoginResults"

@Component({
    selector: "login-page",
    templateUrl: "loginPage.html",
    styleUrls: ["loginPage.css"]
})
export class LoginPage{
    constructor(private auth: AuthService, private router: Router) { }

    public creds: LoginRequest = {
        username: "",
        password: ""
    }
    public errorMessage ="";
    onLogin(buttonType:string) {
        if (buttonType === "Login") {
            this.auth.login(this.creds).subscribe(() => {
                this.router.navigate([""]);
            }, error => {
                console.log(error);
                this.errorMessage = "Failed to login";
            })
        }
        if (buttonType === "Register") {
            this.auth.register(this.creds).subscribe(() => {
                this.router.navigate(["login"]);
            }, error => {
                console.log(error);
                this.errorMessage = "Failed to register";
            })
        }
        
    }
}