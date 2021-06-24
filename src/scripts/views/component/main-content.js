class MainContent extends HTMLElement {
  set addDataToMainContent(dataContent) {
    this.dataContent = dataContent;
    this.render();
  }

  render() {
    this.innerHTML = `
    <main id="maincontent">
        <section class="content">

        ${this.dataContent}

        </section>
    </main>
          `;
  }
}

customElements.define('main-content', MainContent);
