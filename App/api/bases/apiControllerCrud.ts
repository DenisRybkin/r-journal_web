import { ApiControllerGet } from "./apiControllerGet";
import { IApiControllerCrud } from "../interfaces/apiControllerCrud";
import { AxiosInstance } from "axios";
import * as jsonpatch from "fast-json-patch";

export abstract class ApiControllerCrud<T, TFilter>
  extends ApiControllerGet<T, TFilter>
  implements IApiControllerCrud<T>
{
  protected constructor(
    client: AxiosInstance,
    version: string,
    controllerName: string
  ) {
    super(client, version, controllerName);
  }

  async create(model: T): Promise<T | null> {
    return await this.process<T>(this.post("", { data: model }));
  }

  async delete(id: number): Promise<boolean | null> {
    return await this.process<T>(
      this.remove(id.toString()),
      () => true,
      () => false
    );
  }

  async edit(id: number, model: T, params?: any): Promise<T | null> {
    return await this.process<T>(
      this.put(id.toString(), { data: model, params })
    );
  }

  async editPartially(
    id: number,
    currentState: T,
    beforeState: T,
    params?: any,
    sendEmpty: boolean = false
  ): Promise<T | null> {
    const data = jsonpatch.compare({ ...beforeState }, { ...currentState });
    if (!sendEmpty && (!data || data.length == 0)) return null;
    return await this.process<T>(this.patch(id.toString(), { data, params }));
  }
}
