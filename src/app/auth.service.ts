// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: any = null;

  login(username: string, matricula: string): boolean {
    // Verifica las credenciales básicas
    if (username === 'juanperez07' && matricula === '03235635') {
      this.loggedInUser = {
        username: username,
        matricula: matricula
      };
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.loggedInUser = null;
  }

  getLoggedInUser(): any {
    return this.loggedInUser;
  }

  isLoggedInUser(): boolean {
    return this.loggedInUser !== null;
  }
}
