import Ember from 'ember';
export default Ember.Controller.extend({
  items: Ember.computed(function() {
    let output = [];
    for (let i = 0; i < 10; i++) {
      output.push({
        id: i
      });
    }
    return output;
  })
});
