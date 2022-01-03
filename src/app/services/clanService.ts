import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Clan, UpdateClan } from "../shared/Clan";
import { Member, UpdateMember } from "../shared/Member";
import { Post } from "../shared/Post";

@Injectable()
export class ClanService {
    constructor(private http: HttpClient) {

    }


    public clans: Clan[] = [];
    public members: Member[] = [];
	public posts: Post[] = [];
    private url: string = "http://localhost:5000/api/";
    public token = "";
    public expiration = new Date();

    loadClans(): Observable<void> {
        return this.http.get<[]>(this.url + "clans")
            .pipe(map(data => {
                this.clans = data;
                return;
            }));
    }

    createClans(clan: Clan) {
        const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
        return this.http.post(this.url + "clans",
            clan,
            {
                headers: headers
            });
    }
    deleteClan(clanId: number) {
        const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
        return this.http.delete(this.url + "clans/" + clanId, {headers: headers});
    }

    updateClan(clanId: number, updatedClan: UpdateClan) {
        const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
        return this.http.put(this.url + 'clans/' + clanId, updatedClan, { headers: headers });
    }

    loadMembers(clanId: number): Observable<void> {
        return this.http.get<[]>(this.url + "clans/" +clanId+ "/members")
            .pipe(map(data => {
                this.members = data;
                return;
            }));
    }

    createMembers(clanId: number, member: Member) {
        const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
        return this.http.post(this.url + "clans/" +"2"+ "/members",
            member,
            {
                headers: headers
            });
    }
    deleteMember(clanId: number, memberId:number) {
        const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
        return this.http.delete(this.url + "clans/" +clanId+ "/members/" + memberId, {headers: headers});
    }

    updateMember(clanId: number, memberId: number, updatedMember: UpdateMember) {
        const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
        //return this.http.put(this.url + "clans/" +clanId+ "/members/" + memberId, updatedMember, { headers: headers });
        return this.http.put(this.url + "clans/" +"2"+ "/members/" + "2", updatedMember, { headers: headers });
    }
	
	
	
	loadPosts(memberId: number): Observable<void> {
        return this.http.get<[]>(this.url + "clans/" +'2'+ "/members/" + "2" +"/posts")
            .pipe(map(data => {
                this.posts = data;
                return;
            }));
    }
	
	deletePost(memberId: number, postId:number) {
        const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
        return this.http.delete(this.url + "clans/" +'2'+ "/members/" + "2" +"/posts" + postId, {headers: headers});
    }

}