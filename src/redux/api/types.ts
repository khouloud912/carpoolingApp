
export interface IUser {
        record: record,
        token: string,
}

export interface IUserRequest{
    identity: string,
    password: string,

}

export interface record {
    id :string
    username:string,
    collectionId :string,
    collectionName :string,
    created :string,
    email:string,
    emailVisibility :boolean,
    phone:number,
    type :string,
    updated :string,
    verified:boolean
}

export interface IUserRegister{
    username: string,
    email: string,
    password: string,
    passwordConfirm: string,
    type: string,
    phone: string,


}