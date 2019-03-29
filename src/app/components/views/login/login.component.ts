import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
usuario;
password;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
      
  autenticar(){
   if(this.usuario == "leonardo"){
    this.router.navigate(['/dashboard']);
    console.log(
      this.usuario,this.password,"hola bb"
      
    )
   }
    

  }
}
