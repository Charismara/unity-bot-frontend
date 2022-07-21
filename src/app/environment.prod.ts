export class environment {
    production: boolean = true;
    apiEndpoint: string = "https://cloudservice.blutmondgilde.de:2053/";
    accessToken: string = "accessToken";
    oauth2RedirectUri: string = "https://unity.blutmondgilde.de/#/oauth2/redirect";
    discordAuthUrl:string = this.apiEndpoint + "oauth2/authorize/discord?redirect_uri=" + encodeURIComponent(this.oauth2RedirectUri);
}