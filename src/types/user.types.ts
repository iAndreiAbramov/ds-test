export interface IUserBack {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface IUserRawFront {
    userId: string;
    name: string;
}

export interface IUserVerboseFront {
    id: number;
    username: string;
    name: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
        bs: string;
    };
}
