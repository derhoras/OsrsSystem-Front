import { Component, OnInit } from "@angular/core";
import {ClanService} from "../services/clanService";
import { Router } from "@angular/router";
import { Clan } from "../shared/Clan";
import { Member } from "../shared/Member";
import {FormControl, Validators} from '@angular/forms';


@Component({
    selector: "member-create",
    templateUrl: "memberCreateView.html",
    styleUrls: ["memberCreateView.css"]
})

export class MemberCreateView{
    selectFormControl = new FormControl('', Validators.required);
    constructor(private clan: ClanService, private router: Router) { }

    clannId!: number;
    public memberItem: Member = {
        id:0,
        nickname: "",
        goal: "",
		clanId:2
    }
    public errorMessage = "";

    onMemberCreate(){
        this.clan.createMembers(this.clannId,this.memberItem).subscribe(() => {
            this.router.navigate([""]);
        }, error => {
            console.log(error);
            this.errorMessage = "Failed to create";
        })
    }

}
