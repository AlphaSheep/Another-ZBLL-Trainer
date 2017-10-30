class MainController {
  /** @ngInject */
  constructor() {
    this.a = 1;
  }
}

export const main = {
  template: require('./main.html'),
  controller: MainController
};
