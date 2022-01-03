export interface Post {
    id: number;
    header: string;
    body: string;
	memberId: number;
}
export interface UpdatePost {
    header: string;
    body: string;
}