export interface IPrivilege{
    id: number,
    name: string
}

export interface IRole {
    id: number,
    name: string,
    privileges:IPrivilege[]
}

export interface IProfile {
    id: string,
    name: string,
    discriminator: string,
    email: string,
    imageUrl?: string,
    bannerUrl?: string,
    bannerColor: number //-1 = none,
    roles: IRole[]
}

export interface IDiscordBot {
    id: number,
    token: string,
    running: boolean
}