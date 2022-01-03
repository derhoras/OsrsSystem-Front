export interface Clan {
    id: number;
    name: string;
    type: string;
    creationdate: Date;
	description: string;
}
export interface UpdateClan {
    name: string;
}