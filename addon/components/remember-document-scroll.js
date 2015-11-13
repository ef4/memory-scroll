import Base from './base';
import Ember from 'ember';

export default Base.extend({
  targetElement() {
    return Ember.$(document);
  }
});
