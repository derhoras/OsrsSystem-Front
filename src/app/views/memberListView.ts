import { Component, OnInit } from "@angular/core";
import { ClanService } from "../services/clanService";
import { AuthService } from "../services/authService";
import { Router, ActivatedRoute } from "@angular/router";
import { Member } from "../shared/Member";

@Component({
    selector: "member-list",
    templateUrl: "memberListView.html",
    styleUrls: ["memberListView.css"]
})
export default class MemberListView implements OnInit {

    constructor(public clanService: ClanService, private router: Router, public authService: AuthService, private route: ActivatedRoute) {
    }

     clannId!: number;
    ngOnInit(): void {
        this.clannId = this.route.snapshot.params['id'];
        this.clanService.loadMembers(this.clannId).subscribe();
    }

    onDelete(clanId: number, memberId: number) {
        
        this.clanService.deleteMember(clanId, memberId).subscribe(() => {
            this.ngOnInit();
        });
        this.router.navigate(['clans/' +clanId+ '/members']);
    }
    onEdit(clanId: number, memberId: number) {
        this.router.navigate(['clans/' +clanId+ '/members' + memberId+ '/edit']);
    }


    goTo(clanId: number, memberId: number) {
        //this.router.navigate(['clans/', clanId, '/tables', memberId,'/2/posts' ]);
        this.router.navigate(['/clans/', '2', '/members/','2','/posts' ]);
    }
}