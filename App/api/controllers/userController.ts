import { ApiControllerCrud } from "../bases";
import { UserDto } from "../models/UserDto";
import { AxiosInstance } from "axios";
import { Mutex } from "async-mutex";

export class UserController extends ApiControllerCrud<UserDto, {}> {
  constructor(client: AxiosInstance, version: string = "v1") {
    super(client, version, "user");
  }
}
