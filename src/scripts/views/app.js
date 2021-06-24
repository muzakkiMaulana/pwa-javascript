import './component/nav-bar';
import './component/main-content';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this.button = button;
    this.drawer = drawer;
    this.content = content;

    this.initialAppShell();
  }

  initialAppShell() {
    const navbar = document.querySelector('nav-bar');
    navbar.dataNavbar = {
      button: this.button,
      drawer: this.drawer,
    };

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    // console.log(this.button);
    const url = UrlParser.parseActiveUrlWithCombiner();
    // console.log(url);
    const page = routes[url];
    this.content.addDataToMainContent = await page.render();
    await page.afterRender();
  }
}

export default App;
