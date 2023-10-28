export const fetchNews =async (topic) =>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2023-09-30&to=2023-10-28&sortBy=popularity&apiKey=5aa03e7f1ddb4de5bdf9d69eb781ec27`)
    
    
    const allNews =await response.json()
    return allNews.articles 
    
    
}