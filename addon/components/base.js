import Ember from 'ember';

const {
  Component,
  inject
} = Ember;

export default Component.extend({
  memory: inject.service('memory-scroll'),

  didRender() {
    this._super(...arguments);
    let key = this.get('key');
    if (!key) {
      throw new Error("You must provide a key to memory-scroll like {{memory-scroll key=\"my-awesome-pane\"}}.");
    }
    if (key !== this._lastKey) {
      this.remember(this._lastKey);
      this._lastKey = key;
      this.restore(key);
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    this.remember(this.get('key'));
  },

  remember(key) {
    if (key) {
      var position = this.targetElement().scrollTop;
      this.get('memory')[key] = position;
    }
  },

  restore(key) {
    var position = this.get('memory')[key] || 0;
    var elt = this.targetElement();
    if (elt) {
      elt.scrollTop = position;
    }
  }

});
