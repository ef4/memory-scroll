import Component from "@ember/component";

const FIRST_RUN = () => {};

export default Component.extend({
  init() {
    this._lastKey = FIRST_RUN;
    this._super(...arguments);
  },
  didRender() {
    this._super(...arguments);
    let key = this.get('key');
    if (key !== this._lastKey) {
      this._lastKey = key;
      (document.scrollingElement || document.documentElement).scrollTop = (this.get('position') || 0);
    }
  }
});
