import { Component, OnInit } from "@angular/core";
import { ClanService } from "../services/clanService";
import { AuthService } from "../services/authService";
import { Router } from "@angular/router";
import { Post } from "../shared/Post";



@Component({
    selector: "post-list",
    templateUrl: "postListView.html",
    styleUrls: ["postListView.css"]
})
export default class PostListView implements OnInit{
    constructor(public  clanService: ClanService, private router: Router, public authService: AuthService) {
    }
     memberId!: number;

    ngOnInit(): void {
        this.clanService.loadPosts(this.memberId).subscribe();
    }

	onDelete(memberId: number, postId: number) {
        
        this.clanService.deletePost(memberId, postId).subscribe(() => {
            this.ngOnInit();
        });
        this.router.navigate(['clans/' +'2'+ '/members', '/2/posts']);
    }

}