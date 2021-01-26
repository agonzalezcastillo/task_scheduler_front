// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: "b7d24441-7193-4711-9473-c695a8c0a960",
        redirectUri: "https://orders-2b00a.web.app/dashboard",
        postLogoutRedirectUri: "http://localhost:3000",
        authority: 'https://login.microsoftonline.com/common/',
        navigateToLoginRequestUrl: false,
        validateAuthority: true,

    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
