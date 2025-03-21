import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | memory scroll', function(hooks) {
  setupRenderingTest(hooks);

  test('it preserves scroll position when component is replaced', async function(assert) {
    await render(hbs`
      <style type="text/css">
        .sample {
          height: 30px;
          overflow-y: scroll;
        }
        .sample > div {
          height: 100px;
        }
      </style>

      {{#if showIt}}
        {{#memory-scroll key="sample" class="sample"}}
          <div>
            sample content
          </div>
        {{/memory-scroll}}
      {{/if}}
    `);

    this.set('showIt', true);
    assert.equal(this.$('.sample').text().trim(), 'sample content');
    this.$('.sample').scrollTop(50);
    this.set('showIt', false);
    assert.equal(this.$('.sample').length, 0);
    this.set('showIt', true);
    assert.equal(this.$('.sample').scrollTop(), 50);
  });

  test('it preserves independent scroll positions per key when component is replaced', async function(assert) {
    await render(hbs`
      <style type="text/css">
        .sample {
          height: 30px;
          overflow-y: scroll;
        }
        .sample > div {
          height: 100px;
        }
      </style>

      {{#if showIt}}
        {{#memory-scroll key=showIt class="sample"}}
          <div>
            sample content
          </div>
        {{/memory-scroll}}
      {{/if}}
    `);

    this.set('showIt', 'first');
    assert.equal(this.$('.sample').text().trim(), 'sample content');
    this.$('.sample').scrollTop(50);
    this.set('showIt', false);
    assert.equal(this.$('.sample').length, 0);
    this.set('showIt', 'second');
    assert.equal(this.$('.sample').scrollTop(), 0);
    this.set('showIt', false);
    this.set('showIt', 'first');
    assert.equal(this.$('.sample').scrollTop(), 50);
  });

  test('it preserves independent scroll positions per key when key changes', async function(assert) {
    await render(hbs`
      <style type="text/css">
        .sample {
          height: 30px;
          overflow-y: scroll;
        }
        .sample > div {
          height: 100px;
        }
      </style>

      {{#if showIt}}
        {{#memory-scroll key=showIt class="sample"}}
          <div>
            sample content
          </div>
        {{/memory-scroll}}
      {{/if}}
    `);

    this.set('showIt', 'first');
    assert.equal(this.$('.sample').text().trim(), 'sample content');
    this.$('.sample').scrollTop(50);
    this.set('showIt', 'second');
    assert.equal(this.$('.sample').scrollTop(), 0);
    this.set('showIt', 'first');
    assert.equal(this.$('.sample').scrollTop(), 50);
  });
});