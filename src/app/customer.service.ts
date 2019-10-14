import {Injectable} from '@angular/core';

const TOKEN = 'TOKEN';
const STUFF='STUFF_ID';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }
  setStuffId(stuff_id: string): void {
    localStorage.setItem(stuff_id, stuff_id);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
}