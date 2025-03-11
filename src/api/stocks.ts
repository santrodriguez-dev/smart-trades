import type { SearchMarketsResponse } from "@/interfaces/search-stocks";
import type { StocksResponse } from "@/interfaces/stocks";

const BASE_URL = "https://yahoo-finance15.p.rapidapi.com/api";
const X_RAPIDAPI_KEY = "b1eb7a8dc2msh60bdfe6b614bc03p1d8d71jsnd0d4b9819bba"


const getStocksAPI = (): Promise<StocksResponse> => {
  return fetch(
    `${BASE_URL}/v2/markets/tickers?type=STOCKS&page=1`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": X_RAPIDAPI_KEY,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
}

const getmarketsScreener = (): Promise<StocksResponse> => {
  return fetch(
    `${BASE_URL}/v1/markets/screener?list=most_active`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": X_RAPIDAPI_KEY,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
}

const searchMarket = (search: string): Promise<SearchMarketsResponse> => {
  return fetch(
    `${BASE_URL}/v1/markets/search?search=${search}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": X_RAPIDAPI_KEY,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
}

const getFinancialData = (stock: string): Promise<any> => {
  return fetch(
    `${BASE_URL}/v1/markets/stock/modules?symbol=${stock}&module=financial-data`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": X_RAPIDAPI_KEY,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
}

const getStockProfileData = (stock: string): Promise<any> => {
  return fetch(
    `${BASE_URL}/v1/markets/stock/modules?ticker=${stock}&module=asset-profile`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": X_RAPIDAPI_KEY,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
}

export { getStocksAPI, getmarketsScreener, searchMarket, getFinancialData, getStockProfileData }
