import Defaultimage from "../assets/default.png"
// import CardContainer from './CardContainer'

const Card = ({article}) => {
  const {title , description , url, urlToImage} = article;

  return (

    <div className=" col-md-4 col-sm-6 col-xm-12">
      <img src={urlToImage ? urlToImage :Defaultimage} className="card-img-top mt-5 rounded-1" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a target="_blank"
         href={url}className="btn btn-sm btn-primary w-100 rounded-2">
          Read Full News</a>
      </div>
    </div>

  )
}
export default Card