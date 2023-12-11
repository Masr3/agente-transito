// login.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  matricula: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.matricula)) {
      // Redirige al menú después del inicio de sesión exitoso
      this.router.navigate(['/list-multas']);
    } else {
      // Muestra un mensaje de error o realiza acciones adicionales si la autenticación falla
      console.error('Credenciales incorrectas');
    }
  }
}
