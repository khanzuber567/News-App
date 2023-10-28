import React, { useContext, useEffect } from 'react'
import Card from './Card'
import NewsContext from '../Context/NewsContext'
import { fetchNews } from "../Context/NewsAction"

const CardContainer = () => {
  const { articles, dispatch } = useContext(NewsContext)


  const fetchData = async () => {
    const data = await fetchNews("Indore")
    dispatch({
      type: "GET_NEWS",
      payload: data,
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="row mt-5">
      {articles.map((article, index) => (
      <Card key={index} article={article} />
        ))}
    </div>
  )
}

export default CardContainer;