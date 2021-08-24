function Card (props) {
  
  function handleClick() {
    props.onCardClick(props.card);
  } 

  return (
    <article className="place"> 
      <div onClick={handleClick} style={{ backgroundImage: `url(${props.card.link})`, backgroundSize: "cover" }} className="place__pic"/>
      <div className="place__description">
        <h2 className="place__name">{props.card.name}</h2>
        <div className="place__like-wrapper">
          <button type="button" className="place__like" aria-label="Нравится фото места"></button>
          <p className="place__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button type="button" className="place__delete" aria-label="Удалить фото"></button>
    </article>
  );
}

export default Card;