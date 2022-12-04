export interface ISearchBlock {
  value: string;
  onChange: (value: string) => void;
}

export interface ISearchBlockView extends ISearchBlock {}
