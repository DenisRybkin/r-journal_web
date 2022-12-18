import { ApiControllerCrud } from "./apiControllerCrud";
import { IApiControllerLocker } from "../interfaces/apiControllerLocker";
import { AxiosInstance } from "axios";
import { LockerModel } from "../types/LockerModel";

export abstract class ApiControllerLocker<T, TFilter>
  extends ApiControllerCrud<T, TFilter>
  implements IApiControllerLocker<T>
{
  private locker: LockerModel;

  constructor(
    client: AxiosInstance,
    locker: LockerModel,
    version: string,
    controllerName: string
  ) {
    super(client, controllerName, version);
    this.locker = locker;
  }

  async runExclusive(requst: Promise<T>): Promise<T> {
    return await this.locker.runExclusive<T>(async () => await requst);
  }
}
