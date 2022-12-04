import { UserController } from "../api/controllers";
import { AxiosInstance } from "axios";
import { client } from "../plugins/client";

class Api {
  public readonly user: UserController;

  constructor(axios: AxiosInstance) {
    this.user = new UserController(axios);
  }
}

export const api = new Api(client);
