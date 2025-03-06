export interface SkibidiToilet {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

export interface Comment {
    id: number;
    userId: number;
    skibidiToiletId: number;
    content: string;
    timestamp: Date;
}