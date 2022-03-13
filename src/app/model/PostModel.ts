import { UserModel } from "./UserModel"

export class PostModel{
  public idPost: number
  public gameName: string
  public theme: string
  public description: string
  public releaceDate: Date
  public postDate: Date
  public price: number
  public stock: number
  public user: UserModel
}
