import Ember from 'ember';
const FIRST_RUN = function(){};


export default Ember.Component.extend({
  init() {
    this._lastKey = FIRST_RUN;
    this._super();
  },
  didRender() {
    let key = this.get('key');
    if (key !== this._lastKey) {
      this._lastKey = key;
      Ember.$(document).scrollTop(this.get('position') || 0);
    }
  }
});
