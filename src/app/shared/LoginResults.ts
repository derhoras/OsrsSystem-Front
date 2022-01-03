export interface LoginResults {
    accessToken: string;
    expiration: Date;
}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface RegisterRequest {
    username: string;
    password: string;
}
