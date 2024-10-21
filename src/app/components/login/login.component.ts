import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';  
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app.routes';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  standalone:true,
  imports:[BrowserModule, AppRoutingModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';  // Define la variable email
  password: string = '';  // Define la variable password

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).then(() => {
      this.router.navigate(['/dashboard']);
    }).catch((error) => {
      console.log('Login error:', error);
    });
  }
}
