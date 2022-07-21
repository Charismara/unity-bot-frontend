export class environment {
    production: boolean = false;
    apiEndpoint: string = "https://localhost:8800/";
    accessToken: string = "accessToken";
    oauth2RedirectUri: string = "http://localhost:3000/#/oauth2/redirect";
    discordAuthUrl:string = this.apiEndpoint + "oauth2/authorize/discord?redirect_uri=" + encodeURIComponent(this.oauth2RedirectUri);
}
