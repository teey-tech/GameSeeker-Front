import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../model/UserModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModel = new UserModel
  passConfirm: string
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)
  }
  confirmPass(event: any){
    this.passConfirm = event.target.value
  }

  register(){
    if(this.user.password != this.passConfirm){
      alert("As senhas estão incorretas.")
    } else {
      this.auth.register(this.user).subscribe((resp: UserModel) => {
        this.user = resp
        this.router.navigate(['/login'])
        alert('User Registered whit success!')
      })
    }
  }
}
