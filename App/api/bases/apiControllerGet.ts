import { ApiControllerBase } from "./apiControllerBase";
import { IApiControllerGet } from "../interfaces/apiControllerGet";
import { AxiosInstance } from "axios";
import { PagingOptions } from "../types/pagingOptions";
import { PagingModel } from "../types/pagingModel";
import { AutocompleteModelPagingModel } from "../models/AutocompleteModelPagingModel";

export abstract class ApiControllerGet<T, TFilter>
  extends ApiControllerBase
  implements IApiControllerGet<T, TFilter>
{
  protected constructor(
    client: AxiosInstance,
    version: string,
    controllerName: string
  ) {
    super(client, version, controllerName);
  }

  async getById(id: number, options?: any): Promise<T | null> {
    return this.process(this.get(id.toString(), { params: options }));
  }

  async getAll(
    options?: PagingOptions & TFilter & { [key: string]: any }
  ): Promise<PagingModel<T> | null> {
    return await this.process<PagingModel<T>>(
      this.get("", { params: options })
    );
  }

  async autocomplete(
    opts?: PagingOptions & TFilter & { [key: string]: any }
  ): Promise<PagingModel<T> | null> {
    return await this.process<AutocompleteModelPagingModel>(
      this.get("autocomplete", { params: opts })
    );
  }
}
