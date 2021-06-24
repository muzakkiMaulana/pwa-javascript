class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set dataNavbar({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this.toggleDrawer(event, drawer);
    });
  }

  toggleDrawer(event, drawer) {
    this.event = event;
    this.drawer = drawer;

    this.event.stopPropagation();
    this.drawer.classList.toggle('open');
  }

  // closeDrawer(event, drawer) {
  //   this.event = event;
  //   this.drawer = drawer;

  //   event.stopPropagation();
  //   drawer.classList.remove('open');
  // }

  render() {
    this.innerHTML = `
    <nav class="nav">

        <button id="menu" class="header-menu">☰</button>
        <div class="header">
            <h1 class="header-title">
                Seputar Restoran
            </h1>
        </div>
        <ul id="drawer" class="nav-list">
            <li class="nav-item"><a href="#">Home</a></li>
            <li class="nav-item"><a href="#/favorite">Favorite</a></li>
            <li class="nav-item"><a href="https://github.com/muzakkiMaulana/">About Us</a></li>
        </ul>

    </nav>
        `;
  }
}

customElements.define('nav-bar', NavBar);
