import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  user = signal(null);
  token = signal(null);
  refreshToken = signal(null);

}
