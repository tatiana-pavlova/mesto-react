import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card (props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (`place__delete-button ${isOwn ? 'place__delete-button_visible' : 'place__delete-button_hidden'}`);
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `place__like ${isLiked ? 'place__like_active' : ''}`;

  function handleClick() {
    props.onCardClick(props.card);
  } 

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  
  return (
    <article className="place"> 
      <div onClick={handleClick} style={{ backgroundImage: `url(${props.card.link})`, backgroundSize: "cover" }} className="place__pic"/>
      <div className="place__description">
        <h2 className="place__name">{props.card.name}</h2>
        <div className="place__like-wrapper">
          <button type="button" className={cardLikeButtonClassName} aria-label="Нравится фото места" onClick={handleLikeClick}></button>
          <p className="place__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button type="button" className="place__delete" aria-label="Удалить фото"></button>
    </article>
  );
}

export default Card;