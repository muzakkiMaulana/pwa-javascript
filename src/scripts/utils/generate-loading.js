import { createErrorTemplate } from '../views/templates/template-creator';

const generateLoading = {
  async init(element, elementLoading, status) {
    this.elementLoading = elementLoading;
    this.element = element;
    this.status = status;

    await this.checkStatusFetch();
  },

  async checkStatusFetch() {
    const { status, elementLoading, element } = this;

    if (!status || status !== 200) {
      await this.statusError(element, elementLoading, status);
      return;
    }
    await this.removeLoading(element, elementLoading);
  },

  async statusError(element, elementLoading, status) {
    const elementDisplay = elementLoading.classList.contains('display-none');
    const elementContent = elementLoading;

    if (elementDisplay) {
      elementLoading.classList.remove('display-none');
      element.classList.add('display-none');
    }
    elementContent.innerHTML = '';
    elementContent.innerHTML = createErrorTemplate(status);
  },

  async removeLoading(element, elementLoading) {
    elementLoading.classList.add('display-none');
    element.classList.remove('display-none');
  },

  addingLoading(element, elementLoading) {
    const displayLoading = elementLoading.classList.contains('display-none');
    if (displayLoading) {
      elementLoading.classList.remove('display-none');
      element.classList.add('display-none');
    }
  },

};

export default generateLoading;
