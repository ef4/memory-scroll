import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('remember-document-scroll', 'Integration | Component | remember document scroll', {
  integration: true
});

test('it controls document scroll position', function(assert) {
  let doc = Ember.$(document);
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
  doc.scrollTop(50);
  this.set('showIt', false);
  doc.scrollTop(0);
  this.set('showIt', 'first');
  assert.equal(doc.scrollTop(), 50);
});
