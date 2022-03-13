import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLoginDTO } from '../model/UserLoginDTO';
import { UserModel } from '../model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  savedToken: any = localStorage.getItem('token');

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  constructor(private http: HttpClient) { }

  getUsuarioById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(
      `${environment.heroku}/user/${id}`,
      this.token
    );
  }


  login(userLogin: UserLoginDTO): Observable<UserLoginDTO>{
    return this.http.post<UserLoginDTO>(
      `${environment.heroku}/user/auth`,
      userLogin
    );
  }

  register(userRegister: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>(
      `${environment.heroku}/user/register`,
      userRegister
    );
  }

  putUsuario(user: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(
      `${environment.heroku}/user/update`,
      user,
      this.token
    );
  }

  name(){
    let name: string = ''
    let savedName: any = localStorage.getItem('name')
    if (savedName != ''){
      name = savedName
    }
    return name;
  }

  picture(){
    let picture: string = ''
    let savedPicture: any = localStorage.getItem('picture')
    if (savedPicture != ''){
      picture = savedPicture
    }
    return picture;
  }

  seekerCoins(){
    let seekerCoins: string = ''
    let savedSeekerCoins: any = localStorage.getItem('seekerCoins')
    if (savedSeekerCoins != ''){
      seekerCoins = savedSeekerCoins
    }
    return seekerCoins;
  }

  loged(){
    let ok: boolean = false
    if (this.savedToken != null && this.savedToken != ''){
      ok = true;
    }
    return ok;
  }

  logout(){
    localStorage.clear()
    this.loged()
  }


}
