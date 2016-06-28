import Ember from 'ember';
export default Ember.Controller.extend({
  conversationKey: 'one',
  items: Ember.computed(function() {
    let output = [];
    for (let i = 0; i < 10; i++) {
      output.push({
        id: i
      });
    }
    return output;
  }),
  actions: {
    changeConversation(conversationKey) {
      this.set('conversationKey', conversationKey);
    }
  }
});
