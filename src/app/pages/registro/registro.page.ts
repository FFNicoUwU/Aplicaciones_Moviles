import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Route, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: String ='';
  contrasena: String = '';
  
  isAlertOpen = false;
  alertButtons = ['OK']

  constructor(private router: Router ) { }

  ngOnInit() {
  }


  registro(){
    if (this.usuario !== '' && this.contrasena !== ''){
    let parametros: NavigationExtras = {
      state: {
        usuario: this.usuario,
        pass: this.contrasena,
      }, replaceUrl: true
    }; 
    this.router.navigate(['login'],parametros);
  }else {
    this.isAlertOpen = true;
  }
  }
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  }

