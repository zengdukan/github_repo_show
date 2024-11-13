export type License = {
    key: string;
    name: string;
    url: string;
};

export type Repo = {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
    topics: string[];
    license: License;
    homepage: string;
    html_url: string;
    languages_url: string;
};

export type Profile = {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    blog: string;
    location: string;
};

export enum AccountType {
    USERS = 'users',
    ORGS = 'orgs',
};