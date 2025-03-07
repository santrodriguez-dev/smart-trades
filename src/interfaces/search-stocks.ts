export interface SearchMarketsResponse {
  meta: Meta;
  body: Body[];
}

export interface Body {
  symbol: string;
  name: string;
  exch: string;
  type: Type;
  exchDisp: string;
  typeDisp: TypeDisp;
}

export enum Type {
  M = "M",
  S = "S",
}

export enum TypeDisp {
  Equity = "Equity",
  Fund = "Fund",
}

export interface Meta {
  version: string;
  status: number;
  copywrite: string;
  symbol: string;
  processedTime: Date;
}
