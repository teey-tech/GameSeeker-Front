import { PostModel } from "./PostModel"

export class UserModel{
  public idUser: number
  public name: string
  public email: string
  public password: string
  public picture: string
  public seekerCoins: number
  public cpf: number
  public address: string
  public state: string
  public country: string
  public favoritTheme: string
  public post: PostModel[]
}
