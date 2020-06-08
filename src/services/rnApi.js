import { AccessTokenApi, Configuration, ArticlesApi, HistoryApi } from 'regiolab-api-client'

export const apiConfig = new Configuration({
    basePath: "https://regiolab.turd.me/api",
    accessToken: window.localStorage.getItem('access_token'),
})

export const dateDisplayOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };

export const accessTokenApi = new AccessTokenApi(apiConfig)
export const articlesApi = new ArticlesApi(apiConfig)
export const historyApi = new HistoryApi(apiConfig)

