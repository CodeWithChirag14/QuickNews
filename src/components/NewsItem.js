
import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title, description,imageUrl,newsUrl,date,author,source} = this.props;
    return (
       
      <div className="my-3">
        <div className="card" >
          <div style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute',right: '-47px'}}>
            <span className=" translate-middle badge rounded-pill bg-danger"  >{source}
            </span>
          </div>
          <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-danger">By {!author?'Unknow':author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl}  rel="noreferrer" target="_blank" className="btn btn-sm btn-primary btn-dark">Read More</a>
            </div>
        </div>
    </div>
    )
  }
}

export default NewsItem