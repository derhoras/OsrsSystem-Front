import { RouterModule } from "@angular/router";
import { ClanPage } from "../pages/clanPage";
import { LoginPage } from "../pages/loginPage";
import { ClanCreatePage } from "../pages/clanCreatePage";
import { ClanEditView } from "../views/clanEditView";
import MemberListView from "../views/memberListView";
import { MemberPage } from "../pages/memberPage";
import { MemberCreatePage } from "../pages/memberCreatePage";
import PostListView from "../views/postListView ";
import { MemberEditView } from "../views/memberEditView ";
import { AuthActivator } from "../services/authActivatorService";


const routes = [
    { path: "", component: ClanPage },
    { path: "clans/:id/members", component: MemberListView },
    { path: "clans/1/", component: MemberPage },
    //{ path: "clans/:id/memberCreate", component: MemberCreatePage },
    { path: "memberCreate", component: MemberCreatePage },
    //{ path: "clans/2/membersedit/:id", component: MemberEditView },
    { path: "membersedit/2", component: MemberEditView },
    { path: "clans/2/members/2/posts", component: PostListView },
    
    { path: "login", component: LoginPage },
    { path: "clanCreate", component: ClanCreatePage, canActivate: [AuthActivator]  },
    { path: "edit/:id", component: ClanEditView, canActivate: [AuthActivator]  },
    { path: "**", redirectTo: "/" }
];

const router = RouterModule.forRoot(routes,
    {
       useHash: false
    });
export default router;