import { PagingOptions } from "./PagingOptions";
import { AutocompleteModel } from "./AutocompleteModel";

export type AutocompleteModelPagingModel = {
  pagingOptions?: PagingOptions;
  totalItems?: number;
  readonly totalPages?: number;
  items?: Array<AutocompleteModel> | null;
};
