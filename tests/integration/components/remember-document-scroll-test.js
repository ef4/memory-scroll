import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
moduleForComponent('remember-document-scroll', 'Integration | Component | remember document scroll', {
  integration: true
});

test('it controls document scroll position', function(assert) {
  this.render(hbs`
    <style type="text/css">
      body {
        height: 30000px;
      }
    </style>

    {{#if showIt}}
      {{remember-document-scroll key=showIt}}
    {{/if}}
  `);
  this.set('showIt', 'first');
  Ember.$(document).scrollTop(50);
  this.set('showIt', false);
  Ember.$(document).scrollTop(0);
  this.set('showIt', 'first');
  assert.equal(Ember.$(document).scrollTop(), 50);
});
