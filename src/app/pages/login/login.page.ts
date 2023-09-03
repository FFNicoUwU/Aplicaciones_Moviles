import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  mdl_usuario: string = '';
  mdl_contrasena: string= '';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navegar() {
    if(this.mdl_usuario =='admin' && this.mdl_contrasena == 'admin123'){
      let parametros:NavigationExtras = {
        state: {
          user: this.mdl_usuario,
          pass: this.mdl_contrasena
        }
      }
     this.router.navigate(['principal'],parametros);
    }
    }
  }
