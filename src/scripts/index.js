import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

// console.log(App);

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
// custom element
// import './views/component/nav-bar';
// end custom element

// const menu = document.querySelector('#menu');
// const hero = document.querySelector('.hero');
// const drawer = document.querySelector('#drawer');
// const elemntArticle = document.querySelector('#data-restoran');

// function generateData(value) {
//   const articleData = `<article class="card">
//                     <div class="card-header" tabindex="0">${value.city}</div>
//                         <img tabindex="0" src="${value.pictureId}" alt="${value.name}">
//                         <div class="card-body">
//                             <h4 class="title-card"><a href="#">${value.name}</a></h4>
//                             <p tabindex="0" class="card-description">${value.description}</p>
//                         </div>
//                         <div tabindex="0" class="card-footer">
//                             <p>Rating: ${value.rating}</p>
//                         </div>
//                     </article>`;
//   elemntArticle.innerHTML += articleData;
// }

// const xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = () => {
//   if (this.readyState === 4 && this.status === 200) {
//     const response = JSON.parse(this.responseText);
//     response.restaurants.forEach((element) => {
//       generateData(element);
//     });
//   }
// };
// xhttp.open('GET', '/DATA.json', true);
// xhttp.send();

// menu.addEventListener('click', (event) => {
//   drawer.classList.toggle('open');
//   event.stopPropagation();
// });

// hero.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });
