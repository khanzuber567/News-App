import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import NewsContext from '../Context/NewsContext'
import { fetchNews } from '../Context/NewsAction'
import Time from './Time'


export const Navabar = () => {

  const { dispatch } = useContext(NewsContext)
  const [text, setText] = useState("Indore")

  const getNews = async (topic) => {

    const data = await fetchNews(topic)

    dispatch({
      type: "GET_NEWS",
      payload: data
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getNews(text)

  }

// useEffect =()=>{
//   let currentDate = new Date();
//   let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
// }


  // const [isBold, setIsBold] = useState = (false)
  // const handelClick =()=>{
  //     setIsBold(!isBold)
  // }
  // const textStyle ={
  //     fontWeight:isBold ?'bold' :'normal'
  // }




  return (

    <div className='perent'>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
        {/* <img className='Logo' src="" alt="" /> */}
          <li className="Title navbar-brand text-light">Taza-Khabar</li>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <div className="btn-group">
                <button type="button" className="Tech-News btn btn-warning dropdown-toggle mx-1 my-2 mt-1 mb-1   " data-bs-toggle="dropdown" aria-expanded="false">
                  Tech-News
                </button>
                <ul className="dropdown-menu">
                  <li> <button className="tech-Mobile btn btn-danger mx-2" href='#' onClick={() => getNews("Mobiles")}>Mobiles</button></li>
                  <li> <button className="tech-SM btn btn-danger mx-2" href='#' onClick={() => getNews("Social-Media")}>Social-Media</button></li>              
                  <li> <button className="tech-Elec btn btn-danger mx-2" href='#' onClick={() => getNews("Electronics")}>Electronics</button></li>             
                </ul>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-danger mx-1" href="#" onClick={() => getNews("Politics")} data-bs-toggle="dropdown" aria-expanded="false">
                  Politics
                </button>
                </div>

                <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle mx-1" data-bs-toggle="dropdown" aria-expanded="false">
                  Entertenment
                </button>
                <ul className="dropdown-menu">
                  <li> <button className="Bollywood btn btn-danger mx-2" href='#' onClick={() => getNews("Bollywood")}>Bollywood</button></li>
                  <li> <button className="Hollywood btn btn-danger mx-2" href='#' onClick={() => getNews("Hollywood")}>Hollywood</button></li>              
                  <li> <button className="Web-Series btn btn-danger mx-2" href='#' onClick={() => getNews("Web-Series")}>Web-Serires</button></li>             
                  <li> <button className="Movie-Review btn btn-danger mx-2" href='#' onClick={() => getNews("Movie-Review")}>Movie-Review</button></li>             
                  <li> <button className="Television btn btn-danger mx-2" href='#' onClick={() => getNews("Television")}>Television</button></li>             
                </ul>
              </div>

              <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle mx-1" data-bs-toggle="dropdown" aria-expanded="false">
                Sports
                </button>
                <ul className="dropdown-menu">
                  <li> <button className="Cricket btn btn-danger  mx-2" href='#' onClick={() => getNews("Cricket")}>Cricket</button></li>
                  <li> <button className="Wrestling btn btn-danger mx-2" href='#' onClick={() => getNews("wrestling")}>wrestling</button></li>              
                  <li> <button className="Tenis btn btn-danger mx-2" href='#' onClick={() => getNews("Tennis")}>Tennis</button></li>             
                  <li> <button className="Football btn btn-danger mx-2" href='#' onClick={() => getNews("Football")}>Football</button></li>             
                  <li> <button className="Boxing btn btn-danger mx-2" href='#' onClick={() => getNews("Boxing")}>Boxing</button></li>             
                </ul>
              </div>
            
              <div className="btn-group">
                <button type="button" className="btn btn-danger" href="#" onClick={() => getNews("InterNational")} data-bs-toggle="dropdown" aria-expanded="false">
                  International
                </button>
                </div>

              
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input className="form-control btn btn-danger me-2 rounded-2 " type="search" placeholder="Search Here" aria-label="Search"
                value={text}
                onChange={(e) => setText(e.target.value)} />
              <button className="Search-btn btn btn-danger rounded-2" type="submit">Search</button>

            </form>
          </div>
        </div>
      </nav>
       

      <nav className="icons">
        
        <a target='_blank' href= "https://twitter.com/adil_khan73?t=Pm1VvOFvBHcLjKtXby4AAg&s=09"className="twitter fa-brands fa-twitter float-end mt-1 mx-1" data-aos="zoom-in"></a>
        <a target='_blank' href= "https://www.instagram.com/eskillsweb/" className="instagram fa-brands fa-instagram float-end mt-1 mx-1"></a>
        <a target='_blank' href= ""className=" whats-app fa-brands fa-whatsapp float-end mt-1 mx-1"></a>
        <a target='_blank' href="https://www.linkedin.com/company/eskillsweb/" className="Linkedin fa-brands fa-linkedin float-end mt-1 mx-1 "></a>
        <a target='_blank' href= "https://www.facebook.com/eskillsweb" className="Facebook fa-brands fa-facebook float-end mt-1 mx-1"></a>
        <a target='_blank' href= "https://www.youtube.com/@eskillsweb" className="you-tube  fa-brands fa-youtube float-end mt-1 mx-1"></a>
        <a target='_blank' href= "https://www.eskillsweb.com/"className=" Google fa-brands fa-google float-end mt-1 mx-1"></a>
        

        <Time/> 
      


    
      </nav>
     
    </div>
  )
}

export default Navabar