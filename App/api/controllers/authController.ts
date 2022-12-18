import { ApiControllerLocker } from "../bases";
import { AxiosInstance } from "axios";
import { LockerModel } from "../types/LockerModel";

export class AuthController extends ApiControllerLocker<any, any> {
  constructor(
    client: AxiosInstance,
    locker: LockerModel,
    version: string = "v1"
  ) {
    super(client, locker, version, "auth");
  }
}
