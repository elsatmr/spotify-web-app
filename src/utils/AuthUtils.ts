import querystring from 'query-string';

const clientID = '3ba86b9fba67461e8cbabb7a645edf48';
const clientSecret = '23b0a85f44204c6eacaba50a82c8e468';
const scope: string = 'user-read-private';

enum URLS {
  DEV = 'http://localhost:3000/',
}

export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const authURLObjects = {
  response_type: 'token',
  client_id: clientID,
  scope: scope,
  redirect_uri: URLS.DEV,
  show_dialog: true,
};

export let accessURLObjects = {
  grant_type: 'authorization_code',
  code: '',
  redirect_uri: URLS.DEV,
};

export const authUrl =
  'https://accounts.spotify.com/authorize?' +
  querystring.stringify(authURLObjects);

export const tokenUrl = () => {
  return (
    'https://accounts.spotify.com/api/token?' +
    querystring.stringify(accessURLObjects)
  );
};
