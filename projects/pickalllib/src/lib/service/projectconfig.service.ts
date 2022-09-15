import { Injectable } from '@angular/core';
import { APP_ID } from '@angular/core';
// import { environment } from 'src/environments/environment';

export const SERVER_ENDPOINT : string  = 'hdlightcatehherz.com';

@Injectable({
  providedIn: 'root'
})
export class ProjectconfigService {

  public static API_URL_AUTHEN_POST_LOGIN =
    SERVER_ENDPOINT + 'api/v1/auth/login';

  constructor() { }
}
