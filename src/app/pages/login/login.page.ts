import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_user: string = '';
  mdl_contrasena: string = '';
  user: string = '';
  password: string = '';


  isAlertOpen = false;
  alertButtons = ['OK']
  
  constructor(private router:Router) { }

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state){
      this.mdl_user = parametros.extras.state['usuario'];
      this.mdl_contrasena = parametros.extras.state['pass'];
    }
  }

  navegar() {
    if (this.user.trim() === '' || this.password.trim() === ''){
      this.isAlertOpen = true;
      
    }else if(this.user == this.mdl_user && this.password == this.mdl_contrasena){
      let parametros:NavigationExtras = {
        state: {
          user: this.mdl_user,
        }
      }
     this.router.navigate(['principal'],parametros);
    }else{
      this.isAlertOpen = true;
    }
    }
    setOpen(isOpen: boolean) {
      this.isAlertOpen = isOpen;
    }
  }
