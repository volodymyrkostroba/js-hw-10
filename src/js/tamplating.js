import menu from "../json/menu.json"


const ulRef = document.querySelector('.js-menu');


menu.forEach(e=>{
    const item = `<li class="menu__item">
    <article class="card">
      <img
        src="${e.image}"
        alt="${e.name}"
        class="card__image"
      />
      <div class="card__content">
        <h2 class="card__name">${e.name}</h2>
        <p class="card__price">
          <i class="material-icons"> ${e.price} </i>
          кредитов
        </p>
  
        <p class="card__descr">
        ${e.description}
        </p>
      </div>
  
      <button class="card__button button">
        В корзину
      </button>
    </article>
  </li>`;

  ulRef.insertAdjacentHTML('afterbegin',item)
})