import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

export abstract class ApiControllerBase {
  protected client: AxiosInstance;
  protected version: string;
  protected controllerName: string;

  protected constructor(
    client: AxiosInstance,
    version: string,
    controllerName: string
  ) {
    this.client = client;
    this.version = version;
    this.controllerName = controllerName;
  }

  protected url(next: string = ""): string {
    return (
      "api/" +
      this.version +
      "/" +
      this.controllerName +
      (next != "" ? "/" + next : "")
    );
  }

  protected async process<T>(
    request: Promise<T>,
    onSuccess: ((x: T) => any) | null = null,
    onError: ((y: AxiosError) => T | any) | null = null
  ) {
    try {
      const r = await request;
      return onSuccess == null ? (r as T) : onSuccess(r);
    } catch (e) {
      if (onError == null) return null;
      return onError(e as AxiosError);
    }
  }

  protected async get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<T> {
    return await ApiControllerBase.internalRequest(
      this.client.get(this.url(url), { ...config })
    );
  }

  protected async post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<T> {
    return await ApiControllerBase.internalRequest(
      this.client.post(this.url(url), config?.data, config)
    );
  }

  protected async patch<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<T> {
    return await ApiControllerBase.internalRequest(
      this.client.patch(this.url(url), config?.data, config)
    );
  }

  protected async put<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<T> {
    return await ApiControllerBase.internalRequest(
      this.client.put(this.url(url))
    );
  }

  protected async remove<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<T> {
    return await ApiControllerBase.internalRequest(
      this.client.delete(this.url(url), config)
    );
  }

  private static async internalRequest<T = any>(
    req: Promise<AxiosResponse<T>>
  ) {
    const r = await req;
    return r.data;
  }
}
