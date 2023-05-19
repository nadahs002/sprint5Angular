import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    constructor(private authService : AuthService,
      private router: Router ) {
  
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    err:number = 0;
  
    erreur:number=0;
    user = new User();

  onLoggedin()
  {
    this.authService.login(this.user).subscribe({
      next: (data) => {
      let jwToken = data.headers.get('Authorization')!;
      this.authService.saveToken(jwToken);
      this.router.navigate(['/']); 
      },
      error: (err: any) => {
      this.err = 1; 
      }
      });
  }

}
