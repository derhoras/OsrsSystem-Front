import { Component, OnInit } from "@angular/core";
import {ClanService} from "../services/clanService";
import { Router, ActivatedRoute } from "@angular/router";
import { Clan, UpdateClan } from "../shared/Clan";

@Component({
    selector: "clan-edit",
    templateUrl: "clanEditView.html",
    styleUrls: []
})
export class ClanEditView{
    private id!: number;//
    constructor(private clan: ClanService, private router: Router, private route: ActivatedRoute) { }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
    }
    public clanItem: UpdateClan = {
        name: "Nenugalimieji"
    }
    public errorMessage = "";

    onClanUpdate(){
        this.clan.updateClan(this.id, this.clanItem).subscribe(() => {
            this.router.navigate([""]);
        }, error => {
            console.log(error);
            this.errorMessage = "Failed to update";
        })
    }

}