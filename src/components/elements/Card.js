import { Link } from 'react-router-dom';
import './card.css';


function Card({id, url, title, description, praice, weight, addToCart}) {
    return (
        <div className="card">
          <Link to={`/${id}`} >
          <div className= "card-color">
            <img className="card__desh" src={url}/>
         
            <h2 className="card__title">{title}</h2>

            <p className="card__description">{description}</p>
            
        <div className='card__boom'>
          <div className='card__nad'>
          <span className="card__price">{praice} </span>
          <span className="card_weight">{weight}</span>
          </div>
          </div>
          </div>
          </Link>
          <div className='btn-position'> 
          <button className={'card__btn'} onClick={addToCart}>
            +
          </button>
          </div>
        </div>
        
      
    );
}

export default Card;
