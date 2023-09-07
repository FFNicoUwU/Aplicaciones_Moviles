import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  usuario: string = "";
  newcontra: string = "";
  password: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state) {
      this.usuario = parametros.extras.state ["user"];
      this.password = parametros.extras.state ["pass"];
      this.newcontra = parametros.extras.state ["newpass"]
    }
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
  login(){
    let parametros: NavigationExtras ={
      replaceUrl:true
    }
    this.router.navigate(['login'],parametros)
  }
}
