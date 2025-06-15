export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
};

export type ApiInfo = {
    count: number;
    pages: number;
};

export type DataResponse<T = Character> = {
    info?: ApiInfo;
    results?: T[];
}