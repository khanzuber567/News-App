import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer"

const NewsContext = createContext()
export const NewsPriovider = ({ children }) => {
  const initialState = {
    articles: [
      {
        "source": {
          "id": null,
          "name": "WION"
        },
        "author": "Zeba Khan",
        "title": "Tom Cruise' Mission Impossible 7 has 'copied' scenes from SRK's Pathaan think netizens",
        "description": "Tom Cruise' Mission Impossible 7 has 'copied' scenes from SRK's Pathaan think netizenswionews.com",
        "url": "https://www.wionews.com/entertainment/tom-cruise-mission-impossible-7-has-copied-scenes-from-srks-pathaan-think-netizens-593918",
        "urlToImage": "http://cdn.wionews.com/sites/default/files/2023/05/19/352788-horizons-2023-05-19t095425496.jpg",
        "publishedAt": "2023-05-19T04:38:07Z",
        "content": "Maybe fans have manifested this after all comparisons between Hollywoods Tom Cruise and Bollywoods Shah Rukh Khan have finally found fruition. Shah Rukh Khan recently starred in a high-octane flick t… [+2183 chars]"

      }
    ]

  }


  const [state, dispatch] = useReducer(NewsReducer, initialState)
  return (
    <NewsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContext