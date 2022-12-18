import { AuthController, UserController } from "../api/controllers";
import { AxiosInstance } from "axios";
import { client, mutexLocker } from "../plugins";
import { LockerModel } from "../api/types/LockerModel";

class Api {
  public readonly user: UserController;
  public readonly auth: AuthController;

  constructor(client: AxiosInstance, locker: LockerModel) {
    this.user = new UserController(client);
    this.auth = new AuthController(client, locker);
  }
}

export const api = new Api(client, mutexLocker);
