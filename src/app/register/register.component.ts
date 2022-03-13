import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../model/UserModel';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModel = new UserModel()
  passConfirm: string
  favoritTheme: string

  step: any = 1

  constructor(
    private auth: AuthService,
     private router: Router,
     public alerts: AlertsService
     ){ }

  ngOnInit() {
    window.scroll(0,0)
  }

  selectButton1() {
    this.step = 1
  }

  selectButton2() {
    this.step = 2
  }

  selectButton3() {
    this.step = 3
  }

  SelectFavoritTheme(event: any) {
    this.favoritTheme = event.target.value
  }

  confirmPass(event: any){
    this.passConfirm = event.target.value
  }

  register(){
    this.user.favoritTheme = this.favoritTheme
    if(this.user.password != this.passConfirm){
      this.alerts.showAlertDanger("As senhas estão incorretas.")
    } else {
      this.auth.register(this.user).subscribe((resp: UserModel) => {
        this.user = resp
        this.router.navigate(['/login'])
        this.alerts.showAlertSuccess('User Registered whit success!')
      })
    }
  }
}
