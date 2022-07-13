export interface IProfile {
    id: string,
    name: string,
    discriminator: string,
    email: string,
    imageUrl?: string,
    bannerUrl?: string,
    bannerColor: number //-1 = none
}