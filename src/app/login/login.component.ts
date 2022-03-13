import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLoginDTO } from '../model/UserLoginDTO';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLoginDTO = new UserLoginDTO

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  login(){
    this.auth.login(this.userLogin).subscribe({
      next: (resp: UserLoginDTO) =>{
        this.userLogin = resp
        localStorage.setItem('token', this.userLogin.token);
        localStorage.setItem('idUser', JSON.stringify(this.userLogin.idUser));
        localStorage.setItem('name', this.userLogin.name);
        localStorage.setItem('picture', this.userLogin.picture);
        localStorage.setItem('email', this.userLogin.email);
        localStorage.setItem('seekerCoins', JSON.stringify(this.userLogin.seekerCoins));
        location.replace('/home')
      },
      error: erro=> {
        if(erro.status == 401){
          alert("User or password is wrong!")
        }
        if(erro.status == 500){
          alert("User or password is missing!")
        }
      }
    })
  }

}
