import querystring from 'query-string';

const clientID = '3ba86b9fba67461e8cbabb7a645edf48';
const scope: string = 'user-read-private';

enum URLS {
  DEV = 'http://localhost:3000/',
  SEARCH = 'http://localhost:3000/search',
}

export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const authURLObjects = {
  response_type: 'code',
  client_id: clientID,
  scope: scope,
  redirect_uri: URLS.SEARCH,
  show_dialog: true,
};

export const authUrl =
  'https://accounts.spotify.com/authorize?' +
  querystring.stringify(authURLObjects);
