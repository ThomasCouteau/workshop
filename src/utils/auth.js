import auth0 from "auth0-js";

const webAuth = new auth0.webAuth({
  domain: "dev-bq3ca7ko.eu.auth0.com",
  client_id: "mGsXVz484Vwtklt9eKnBEXRwqeG4Melp",
  redirectUri: "",
  responseType: "token id_token",
  scope: "openid profile",
});

const login = () => {
  webAuth.authorize();
};

export { login };
