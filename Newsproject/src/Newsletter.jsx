import React from 'react'
import image from '../src/image.png'
const Newsletter = (props) => {
  return (
    <div>
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:'345px'}}>
  <img src={props.src?props.src:image} style={{height:"200px", width:"300px" }}  className="card-img-top" alt="..."/>
  <div className="card-body" style={{height:"280px"}}>
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description?props.description.slice(0,90):"explore more"}</p>
    <a href={props.url} className="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
  )
}
Newsletter.defaultProps = {
  title: 'No Title',
  description: 'No Description Available',
  src: null,
  url: null,
};
export default Newsletter
