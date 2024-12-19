import { google } from 'googleapis'

const { GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REDIRECT_URI, SCOPES } = process.env
const OAuth2client = new google.auth.OAuth2(GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REDIRECT_URI)

export const getAuthUrl = async (req, res) => {
  const authUrl = OAuth2client.generateAuthUrl({access_type: 'offline', scope: SCOPES})
  res.redirect(authUrl)
}

export const getToken = async (req, res)=> {
  const authCode = req.query.code;
  OAuth2client.getToken(authCode).then((credentials)=> {
    const { credentials } = credentials
    OAuth2client.setCredentials(credentials)
    //res.redirect() could be used here when combined with whole project
  }).catch((err) => {
    console.error('Error exchanging code for tokens', err)
    })
}