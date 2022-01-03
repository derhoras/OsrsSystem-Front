import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import  ClanListView  from './views/clanListView';
import MemberListView from './views/memberListView';
import PostListView from './views/postListView ';
import { ClanCreateView } from './views/clanCreateView';
import { ClanEditView } from './views/clanEditView';
import { MemberCreateView } from './views/memberCreateView';
import { MemberEditView } from './views/memberEditView ';
import Header  from './views/header';
import Footer  from './views/footer';
import Content  from './views/content';

import { ClanPage } from './pages/clanPage';
import { MemberPage } from './pages/memberPage';
import { ClanCreatePage } from './pages/clanCreatePage';
import { MemberCreatePage } from './pages/memberCreatePage';
import { ClanService } from "./services/clanService";
import { AuthService } from "./services/authService";
import { AuthInterceptor } from "./services/authInterceptor";
import { JwtService } from "./services/jwtService";
import router from './router';
import { LoginPage } from "./pages/loginPage";
import { AuthActivator } from "./services/authActivatorService";
import { FormsModule } from "@angular/forms";

//import { MatIconModule } from "@angular/material/icon";
//import { MatIconRegistry } from "@angular/material/icon";
import { AngularSvgIconModule } from 'angular-svg-icon';
@NgModule(({
    declarations: [
        AppComponent,
        ClanListView,
        MemberListView,
        ClanCreateView,
        ClanEditView,
        PostListView,
        MemberCreateView,
        MemberEditView,
        ClanPage,
        MemberPage,
        ClanCreatePage,
        MemberCreatePage,
        LoginPage,
        Header,
        Footer,
        Content
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        router,
        FormsModule,
       // MatIconModule,
        //MatIconRegistry
        AngularSvgIconModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, JwtService,
        ClanService,
        AuthActivator,
        AuthService
        ],
    bootstrap: [AppComponent]
}) as any)
export class AppModule { }
