import React from "react";
import '../App.css';




const  NewsItem =(props)=> {
  
    let { title, description, imageUrl,newsUrl,author,date} = props;
    

    return (
    
      <div className="container mb-3 my-3  " >
    
      
        <div className="card text-dark mb-3 " 
        
      >
      
        <div className="card border-light mb-3" >
          <img src={!imageUrl?"https://cdn-icons-png.flaticon.com/512/21/21601.png":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body  " >
            <h5 className="card-title">{title}...</h5>
            <p className="card-text bg-color=danger "> {description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date (date).toGMTString()}</small></p>
            <a href={newsUrl} target="noreferrer" className="btn  btn-sm btn-dark">
              READ MORE
            </a>
          </div>
         
        </div>
      </div>
      </div>
    
     
     
     
     
    );

  
}

export default NewsItem;
