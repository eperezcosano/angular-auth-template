import { Injectable } from '@angular/core';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

    constructor(private oauthService: OAuthService) {
        const authCodeFlowConfig = {
            // Url of the Identity Provider
            issuer: 'https://idsvr4.azurewebsites.net',

            // URL of the SPA to redirect the user to after login
            redirectUri: window.location.origin + '/dashboard',

            // The SPA's id. The SPA is registerd with this id at the auth-server
            // clientId: 'server.code',
            clientId: 'spa',

            // Just needed if your auth server demands a secret. In general, this
            // is a sign that the auth server is not configured with SPAs in mind
            // and it might not enforce further best practices vital for security
            // such applications.
            // dummyClientSecret: 'secret',

            responseType: 'code',

            // set the scope for the permissions the client should request
            // The first four are defined by OIDC.
            // Important: Request offline_access to get a refresh token
            // The api scope is a usecase specific one
            scope: 'openid profile email offline_access api',

            showDebugInformation: true,
        };
        this.oauthService.configure(authCodeFlowConfig);
        this.oauthService.loadDiscoveryDocumentAndTryLogin().then();
    }

    login() {
        this.oauthService.initLoginFlow();
    }

    logout() {
        this.oauthService.logOut();
    }

    getName() {
        const claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims['given_name'];
    }

}
