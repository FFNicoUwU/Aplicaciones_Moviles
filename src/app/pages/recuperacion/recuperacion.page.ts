import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {

  constructor(private router:Router) { }
  usuario: string = "";
  password: string = "";

  user: string = "";
  pass: string = "";

  newcontra: string = "";

  //Boton de alerta
  isAlertOpen = false;
  alertButtons = ['OK']

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state) {
      this.user = parametros.extras.state ['user'];
      this.pass = parametros.extras.state ['pass'];
    }
  }
  confirmacion(){
    if (this.usuario.trim() === '' || this.password.trim() === ''){
      this.isAlertOpen = true;
      
    }else if (this.usuario == this.user){
      this.pass = this.password
      let parametros: NavigationExtras = {
        state: {
          usuario: this.user,
          newcontra: this.password
        }, replaceUrl: true
      }
      this.router.navigate(['login'], parametros)
    }else {
      this.isAlertOpen = true;
    }
    }
    setOpen(isOpen: boolean) {
      this.isAlertOpen = isOpen;
    }
    retroceder(){
      let parametros: NavigationExtras = {
        state: {
          usuario: this.usuario,
          pass: this.password,
          newpass: this.newcontra
        }, replaceUrl: true
      } 
      this.router.navigate(['login'],parametros)
    }
  }

