export interface IApiControllerLocker<T> {
  runExclusive: (requst: Promise<T>) => Promise<T>;
}
