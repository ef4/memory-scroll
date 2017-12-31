import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  conversationKey: 'one',
  items: computed(function() {
    return Array(10).fill(null).map((_, id) => ({id}));
  }),
  actions: {
    changeConversation(conversationKey) {
      this.set('conversationKey', conversationKey);
    }
  }
});
