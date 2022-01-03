export interface Member {
    id: number;
    nickname: string;
    goal: string;
	clanId: number;
}
export interface UpdateMember {
    nickname: string;
    goal: string;
}