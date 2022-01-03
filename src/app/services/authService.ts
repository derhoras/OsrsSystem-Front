import { Injectable } from "@angular/core"
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable, throwError, shareReplay, tap } from "rxjs"
import { LoginResults, LoginRequest, RegisterRequest } from "../shared/LoginResults";
import { JwtService } from "./jwtService";
import jwt_decode from "jwt-decode"
import { ClanService } from "./clanService";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url: string = "http://localhost:5000/api/";
    decodedToken!: { [key: string]: string };

    constructor(private http: HttpClient, private jwtService: JwtService) {
    }

    login(creds: LoginRequest): Observable<LoginResults> {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(creds);
        return this.http.post<LoginResults>(this.url + "login", body, { headers: headers })
            .pipe(
                tap((res) => { this.setSession(res) }),
                shareReplay()
            );
    }
    register(creds: RegisterRequest) {
        return this.http.post<LoginResults>(this.url + "register", creds);
    }

    private setSession(authResult: LoginResults) {
        this.decodedToken = jwt_decode(authResult.accessToken);

        localStorage.setItem('id_token', authResult.accessToken);
        localStorage.setItem('role', this.decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
        localStorage.setItem('user_id', this.decodedToken['userId']);
        localStorage.setItem('exp', this.decodedToken['exp']);
    }

    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('role');
        localStorage.removeItem('user_id');
    }

    public isLoggedIn(): boolean {
        return localStorage.getItem("id_token") != null && this.getExpiration() > (Date.now() / 1000);
    }

    isLoggedOut(): boolean {
        return !this.isLoggedIn();
    }

    public getUserId(): string | null {
        return localStorage.getItem("user_id");
    }

    public getRole(): string | null {
        return localStorage.getItem("role");
    }

    getExpiration(): number {
        return parseInt(localStorage.getItem('exp')!);
    }
}