import { AccessTokenApi, Configuration, ArticlesApi } from 'regiolab-api-client'

export const apiConfig = new Configuration({
    basePath: "https://regiolab.turd.me/api",
    accessToken: window.localStorage.getItem('access_token'),
})


export const accessTokenApi = new AccessTokenApi(apiConfig)
export const articlesApi = new ArticlesApi(apiConfig)

//  const articles = articlesApi.getRecommendedArticles().then((response)=> {
//      console.log(response)
//  }) 

//  export const getRecommendedArticles = async () => {
//      const result = articlesApi.getRecommendedArticles().then(({ data }) => data)
//      return result 
//  }
