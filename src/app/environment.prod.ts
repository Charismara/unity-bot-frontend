export class environment {
    production: boolean = true;
    apiEndpoint: string = "http://cloudservice.blutmondgilde.de:8800/";
    accessToken: string = "accessToken";
    oauth2RedirectUri: string = "http://unity.blutmondgilde.de:3000/oauth2/redirect";
    discordAuthUrl:string = this.apiEndpoint + "oauth2/authorize/discord?redirect_uri=" + encodeURIComponent(this.oauth2RedirectUri);
}