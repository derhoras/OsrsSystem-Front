import { Component, OnInit } from "@angular/core";
import {ClanService} from "../services/clanService";
import { Router } from "@angular/router";
import { Clan } from "../shared/Clan";
import {FormControl, Validators} from '@angular/forms';


@Component({
    selector: "clan-create",
    templateUrl: "clanCreateView.html",
    styleUrls: []
})

export class ClanCreateView{
    selectFormControl = new FormControl('', Validators.required);
    constructor(private clan: ClanService, private router: Router) { }


    public clanItem: Clan = {
        id:0,
        name: "",
        description: "",
        type: "",
        creationdate: new Date(Date.now())
    }
    public errorMessage = "";

    onClanCreate(){
        this.clan.createClans(this.clanItem).subscribe(() => {
            this.router.navigate([""]);
        }, error => {
            console.log(error);
            this.errorMessage = "Failed to create";
        })
    }

}
