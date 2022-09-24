export interface IPrivilege {
    id: number,
    name: string
}

export interface IRole {
    id: number,
    name: string,
    privileges: IPrivilege[]
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
    name: string,
    applicationId: string,
    running: boolean
}

export interface IDiscordGuild {
    id: string,
    name: string,
    icon: string,
    permissions?: string,
    owner?: boolean,
    features: string[]
}

export interface IFullDiscordGuild extends IDiscordGuild {
    splash?: string,
    discovery_splash?: string,
    owner_id: string,
    region?: string,
    afk_channel_id?: string,
    afk_timeout: number,
    widget_enabled?: boolean,
    widget_channel_id?: string,
    verification_level: number,
    default_message_notifications: number,
    explicit_content_filter: number,
    roles: unknown[],
    emojis: unknown[],
    mfa_level: number,
    application_id?: string,
    system_channel_id?: string,
    system_channel_flags: number,
    rules_channel_id?: string,
    max_presence?: number,
    approximate_presence_count?: number
    approximate_member_count?: number
}