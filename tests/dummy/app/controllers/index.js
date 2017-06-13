import Ember from 'ember';
export default Ember.Controller.extend({
  conversationKey: 'one',
  items: Ember.computed(function() {
    return Array(10).fill(null).map((_, id) => ({id}));
  }),
  actions: {
    changeConversation(conversationKey) {
      this.set('conversationKey', conversationKey);
    }
  }
});
