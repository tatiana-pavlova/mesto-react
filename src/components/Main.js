import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/Api";
import Card from "./Card";

function Main (props) {
  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);
  
  
  React.useEffect(() => {
    api.getInitialCards()
      .then((resCards) => {
        setCards(resCards);
      })
      .catch((err) => {
        console.log(err);
      });
  })

  
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard (card._id).then((newCard) => {
      setCards((state) => state.filter((c) => c._id === card._id ? newCard : c));
    })
  }
  

  
  return (
    <main>
      <section className="profile">
        <div className="profile__user">
          <div className="profile__avatar-overlay" onClick={props.onEditAvatar}><div className="profile__avatar" 
                          style={{ backgroundImage: `url(${currentUser.avatar})`, backgroundSize: "cover" }} /></div>
          <div className="profile__info">
            <div className="profile__name-info">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button type="button" className="profile__edit" onClick={props.onEditProfile} aria-label="Редактировать профайл"></button>
            </div>
            <p className="profile__job-info">{currentUser.about}</p>
          </div>
        </div>
        <button type="button" className="profile__add" onClick={props.onAddPlace} aria-label="Добавить фото"></button>
      </section>

      <section className="places">
        {cards.map((card) => {
          return (<Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} 
                        onCardDelete={handleCardDelete} />)
        })}
      </section>
    </main>
  );
}

export default Main;