import { IUser } from "../interface/user.interface";

export class User {
  static get list(): IUser[] {
    return [
      {
        username: "standard_user",
        password: "secret_sauce",
      },
    ];
  }
}
