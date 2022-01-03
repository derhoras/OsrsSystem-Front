import { Component, OnInit } from "@angular/core";
import { ClanService } from "../services/clanService";
import { AuthService } from "../services/authService";
import { Router } from "@angular/router";
import { Clan } from "../shared/Clan";



@Component({
    selector: "clan-list",
    templateUrl: "clanListView.html",
    styleUrls: ["clanListView.css"]
})
export default class ClanListView implements OnInit{
    constructor(public  clanService: ClanService, private router: Router, public authService: AuthService) {
    }


    ngOnInit(): void {
        this.clanService.loadClans().subscribe();
    }

    onDelete(clanId: number) {
        this.clanService.deleteClan(clanId).subscribe(() => {
            this.ngOnInit();
        });
        this.router.navigate(['']);
    }
    onEdit(clanId: number) {
        this.router.navigate(['edit/' + clanId]);
    }
    goTo(clanId: number) {
        this.router.navigate(['clans/', clanId, '/members']);
    }

}