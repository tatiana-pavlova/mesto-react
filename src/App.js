import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      <div classNameName="page__content">
        <header classNameName="header">
          <img src="<%=require('./images/logo.svg')%>" alt="Логотип Mesto Russia" classNameName="header__logo"/>
        </header>
      
    <main>
      <section className="profile">
        <div className="profile__user">
          <div className="profile__avatar-overlay"><img src="#" alt="Фото пользователя" className="profile__avatar"/></div>
          <div className="profile__info">
            <div className="profile__name-info">
              <h1 className="profile__name"></h1>
              <button type="button" className="profile__edit" aria-label="Редактировать профайл"></button>
            </div>
            <p className="profile__job-info"></p>
          </div>
        </div>
        <button type="button" className="profile__add" aria-label="Добавить фото"></button>
      </section>

      <section className="places">
        <template id="place">
          <article className="place"> 
            <img alt="Фото места" className="place__pic"/>
            <div className="place__description">
              <h2 className="place__name"></h2>
              <div className="place__like-wrapper">
                <button type="button" className="place__like" aria-label="Нравится фото места"></button>
                <p className="place__like-counter"></p>
              </div>
            </div>
            <button type="button" className="place__delete" aria-label="Удалить фото"></button>
          </article>
        </template>
      </section>
    </main>

    <footer className="footer">
      <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
    </footer>
  </div>

  <div className="popup popup_type_edit-profile">
    <div className="popup__container">
      <h2 className="popup__title">Редактировать профиль</h2>
      <form className="popup__form" name="profileEditForm" novalidate>
        <div className="popup__input-field">
          <input id="name-input" type="text" className="popup__input popup__input_edit_name" value="" name="name" placeholder="Имя" required minlength="2" maxlength="40"/>
          <span className="name-input-error"></span>
        </div>
        <div className="popup__input-field">
          <input id="job-input" type="text" className="popup__input popup__input_edit_job" value="" name="job" placeholder="Вид деятельности" required minlength="2" maxlength="200"/>
          <span className="job-input-error"></span>
        </div>
        <button type="submit" className="popup__button" aria-label="Сохранить изменения">Сохранить</button>
      </form>
      <button type="button" className="popup__close" aria-label="Закрыть попап"></button>
    </div>
  </div>

  <div className="popup popup_type_new-card">
    <div className="popup__container">
      <h2 className="popup__title">Новое место</h2>
      <form className="popup__form" name="profileEditForm" novalidate>
        <div className="popup__input-field">
          <input id="place-input" type="text" className="popup__input popup__input_place-name" placeholder="Название" name="placeName" required minlength="2" maxlength="30"/>
          <span className="place-input-error"></span>
        </div>
        <div className="popup__input-field">
          <input id="link-input" type="url" className="popup__input popup__input_place-link" placeholder="Ссылка на картинку" name="placeLink" required/>
          <span className="link-input-error"></span>
        </div>
        <button type="submit" className="popup__button" aria-label="Сохранить изменения">Создать</button>
      </form>
      <button type="button" className="popup__close" aria-label="Закрыть попап"></button>
    </div>
  </div>

  <div className="popup popup_type_delete-card">
    <div className="popup__container">
      <form className="popup__form" novalidate>
        <h2 className="popup__title">Вы уверены?</h2>
        <button type="submit" className="popup__button" aria-label="Удалить карточку">Да</button>
        <button type="button" className="popup__close" aria-label="Закрыть попап"></button>
      </form>
    </div>
  </div>

  <div className="popup popup_type_photo">
    <div className="picture">
      <figure className="picture__container">
        <img src="#" alt="Фото места" className="picture__view"/>
        <figcaption className="picture__name"></figcaption>
      </figure>
      <button type="button" className="popup__close" aria-label="Закрыть попап"></button>
    </div>
  </div>

  <div className="popup popup_type_edit-avatar">
    <div className="popup__container">
      <h2 className="popup__title">Обновить аватар</h2>
      <form className="popup__form" name="avatarEditForm" novalidate>
        <div className="popup__input-field">
          <input id="avatar-input" type="url" className="popup__input popup__input_avatar-link" placeholder="Добавьте ссылку на аватар" name="avatar" required/>
          <span className="avatar-input-error"></span>
        </div>
        <button type="submit" className="popup__button" aria-label="Сохранить изменения">Сохранить</button>
      </form>
      <button type="button" className="popup__close" aria-label="Закрыть попап"></button>
    </div>
  </div>
    </div>
  );
}

export default App;
