

export interface IUser{
    record: object,
    token : string
}

export interface IUserRequest{
    identity: string,
    password: string,
    phone: number | null,
    type: string |null;
}