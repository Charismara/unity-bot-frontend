import {environment} from "../environment";
import {IProfile} from "../reducer/backendApiModels";


const request = (options: any) => {
    const headers = new Headers({
        "Content-Type": "application/json"
    });

    if (localStorage.getItem(environment.accessToken)) {
        headers.append("Authorization", "Bearer " + localStorage.getItem(environment.accessToken));
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options).then(response =>
        response.json().then(json => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getCurrentUser() {
    if (!localStorage.getItem(environment.accessToken)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: environment.apiEndpoint + "/profile",
        method: "GET"
    });
}

export function hasPermission(permission: string, profile: IProfile): boolean {
    return profile.roles.flatMap(role => role.privileges).find(privilege => privilege.name === permission) !== undefined;
}