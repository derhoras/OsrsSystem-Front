import { Component, OnInit } from "@angular/core";
import {ClanService} from "../services/clanService";
import { Router, ActivatedRoute } from "@angular/router";
import { Member, UpdateMember } from "../shared/Member";

@Component({
    selector: "member-edit",
    templateUrl: "memberEditView.html",
    styleUrls: []
})
export class MemberEditView{
    private id!: number;//
    constructor(private clan: ClanService, private router: Router, private route: ActivatedRoute) { }

    clannId!: number;
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
    }
    public memberItem: UpdateMember = {
        nickname: "Nenugalimieji",
		goal: "Laimeti"
    }
    public errorMessage = "";

    onMemberUpdate(){
        this.clan.updateMember(this.clannId, this.id, this.memberItem).subscribe(() => {
            this.router.navigate([""]);
        }, error => {
            console.log(error);
            this.errorMessage = "Failed to update";
        })
    }

}