import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('scroll-to', 'Integration | Component | scroll to', {
  integration: true
});

test('it scrolls document at initial render', function(assert) {
  let doc = Ember.$(document);
  this.render(hbs`
    <style type="text/css">
      body {
        height: 30000px;
      }
    </style>

    {{#if showIt}}
      {{scroll-to position=17}}
    {{/if}}
  `);
  this.set('showIt', 'first');
  assert.equal(doc.scrollTop(), 17);
});

test('it scrolls document at initial render with key', function(assert) {
  let doc = Ember.$(document);
  this.set('key', 1);
  this.render(hbs`
    <style type="text/css">
      body {
        height: 30000px;
      }
    </style>

    {{#if showIt}}
      {{scroll-to position=17 key=key}}
    {{/if}}
  `);
  this.set('showIt', 'first');
  assert.equal(doc.scrollTop(), 17);
});

test('it scrolls document when key changes', function(assert) {
  let doc = Ember.$(document);
  this.set('key', 1);
  this.render(hbs`
    <style type="text/css">
      body {
        height: 30000px;
      }
    </style>

    {{#if showIt}}
      {{scroll-to position=17 key=key}}
    {{/if}}
  `);
  this.set('showIt', 'first');
  doc.scrollTop(0);
  this.set('key', 2);
  assert.equal(doc.scrollTop(), 17);
});
