import { useState } from "react";
import './Card.css';

export default function Card({id,name,info,image,price,removeTours}){
    
    const [readMore,setReadMore] = useState(false);
    const description = readMore ? `${info}` :`${info.substr(0,200)}....` ;

    function readMoreHandler(){
        setReadMore(!readMore);
    }

    
    return (
        <div className="tour-container">
            <img src={image} className="tour-img" alt="images"></img>
            <div className="tours-info">
                <div className="tours-details">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>{readMore ? `showless` : `readmore`}</span>
                </div>
            </div>
            <button className="not-interested-btn" onClick={()=>removeTours(id)}>
                Not Interested
            </button>

        </div>
    );
}