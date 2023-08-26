import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_usuario: String = '';
  mdl_contrasena: String = '';

  isAlertOpen = true;
  alertButtons = ['OK'];
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegar() {
    if(this.mdl_usuario == 'Nicolas' && this.mdl_contrasena == '123'){

      let parametros: NavigationExtras = {
        state: {
          user: this.mdl_usuario,
          parss: this.mdl_contrasena
      }
    }
    this.router.navigate(['principal'], parametros);
  }else{
    this.isAlertOpen = true;
  }

  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}
