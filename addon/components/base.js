import Ember from 'ember';

export default Ember.Component.extend({
  memory: Ember.inject.service('memory-scroll'),

  didInsertElement() {
    let key = this.get('key');
    if (!key) {
      throw new Error("You must provide a key to memory-scroll like {{memory-scroll key=\"my-awesome-pane\"}}.");
    }
    var position = this.get('memory')[key] || 0;
    var elt = this.targetElement();
    if (elt) {
      elt.scrollTop(position);
    }

  },

  willDestroyElement() {
    var position = this.targetElement().scrollTop();
    this.get('memory')[this.get('key')] = position;
  }
});
