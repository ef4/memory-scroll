import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

module('Integration | Component | scroll to', function(hooks) {
  setupRenderingTest(hooks);

  test('it scrolls document at initial render', async function(assert) {
    let doc = Ember.$(document);
    await render(hbs`
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

  test('it scrolls document at initial render with key', async function(assert) {
    let doc = Ember.$(document);
    this.set('key', 1);
    await render(hbs`
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

  test('it scrolls document when key changes', async function(assert) {
    let doc = Ember.$(document);
    this.set('key', 1);
    await render(hbs`
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
});