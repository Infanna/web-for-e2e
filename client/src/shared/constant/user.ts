import { IUser } from "../interface/user.interface";

export const userList: ReadonlyArray<Readonly<IUser>> = [
  {
    username: "standard_user",
    password: "secret_sauce",
  },
  {
    username: "out_of_stock_user",
    password: "secret_sauce",
  },
];
