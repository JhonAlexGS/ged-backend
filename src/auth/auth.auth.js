import { google } from "googleapis";
import { SECRETO_GOOGLE, ID_CLIENTE_GOOGLE, URI_URL_GOOGLE, REDIRECT_FRONT } from "../config.js"

const oauth2Client = new google.auth.OAuth2(
    ID_CLIENTE_GOOGLE,
    SECRETO_GOOGLE,
    URI_URL_GOOGLE
);

export const authGoogle = async (req, res) => {
    const { typeAuth } = req.query;
    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: [
            "openid",
            "email",
            "profile",
        ],
        state: typeAuth,
    });
    res.redirect(url);
}

// Callback de Google
export const authGoogleCallback = async (req, res) => {
    const { code, state } = req.query;
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    const oauth2 = google.oauth2({
        auth: oauth2Client,
        version: "v2"
    });

    const { data } = await oauth2.userinfo.get();

    const redirectUrl = `${REDIRECT_FRONT}/login?username=${encodeURIComponent(data.given_name)}&lastname=${encodeURIComponent(data.family_name)}&email=${encodeURIComponent(data.email)}&typeAuth=${state}`;

    res.redirect(redirectUrl);
};