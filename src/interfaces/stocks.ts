export interface StocksResponse {
  meta: Meta;
  body: Body[];
}

export interface Body {
  symbol: string;
  name: string;
  lastsale: string;
  netchange: string;
  pctchange: string;
  marketCap: string;
}

export interface Meta {
  version: string;
  status: number;
  copywrite: string;
  totalrecords: number;
  headers: Body;
}
