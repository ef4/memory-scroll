import Ember from 'ember';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | remember document scroll', function(hooks) {
  setupRenderingTest(hooks);

  test('it controls document scroll position', async function(assert) {
    await render(hbs`
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
});