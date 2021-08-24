import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="App">
      <div className="page">
        <div className="page__content">
          <Header />
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} 
                onCardClick={handleCardClick} />
          <Footer />
        </div>

        <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} children={
          <form className="popup__form" name="profileEditForm" noValidate>
            <div className="popup__input-field">
              <input id="name-input" type="text" className="popup__input popup__input_edit_name" defaultValue="" name="name"
                     placeholder="Имя" required minLength="2" maxLength="40"/>
              <span className="name-input-error"></span>
            </div>
            <div className="popup__input-field">
              <input id="job-input" type="text" className="popup__input popup__input_edit_job" defaultValue="" name="job" 
                     placeholder="Вид деятельности" required minLength="2" maxLength="200"/>
              <span className="job-input-error"></span>
            </div>
            <button type="submit" className="popup__button" aria-label="Сохранить изменения">Сохранить</button>
          </form>
        } />

        <PopupWithForm name="new-card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} children={
          <form className="popup__form" name="profileEditForm" noValidate>
            <div className="popup__input-field">
              <input id="place-input" type="text" className="popup__input popup__input_place-name" placeholder="Название" 
                     name="placeName" required minLength="2" maxLength="30"/>
              <span className="place-input-error"></span>
            </div>
            <div className="popup__input-field">
              <input id="link-input" type="url" className="popup__input popup__input_place-link" placeholder="Ссылка на картинку" 
                     name="placeLink" required/>
              <span className="link-input-error"></span>
            </div>
            <button type="submit" className="popup__button" aria-label="Сохранить изменения">Создать</button>
          </form>
        } />
        
        <PopupWithForm name="delete-card" title="Вы уверены?" onClose={closeAllPopups} children={
          <form className="popup__form" noValidate>
            <button type="submit" className="popup__button" aria-label="Удалить карточку">Да</button>
          </form>
        } />

        <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} children={
          <form className="popup__form" name="avatarEditForm" noValidate>
            <div className="popup__input-field">
              <input id="avatar-input" type="url" className="popup__input popup__input_avatar-link" placeholder="Добавьте ссылку на аватар" 
                      name="avatar" required/>
              <span className="avatar-input-error"></span>
            </div>
            <button type="submit" className="popup__button" aria-label="Сохранить изменения">Сохранить</button>
          </form>
        } />
        
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
