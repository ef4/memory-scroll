import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { TrackedObject } from 'tracked-built-ins';
import { settled } from '@ember/test-helpers';
import memoryScroll from '../src/components/memory-scroll';

module('Integration | Component | memory scroll', function (hooks) {
  setupRenderingTest(hooks);

  test('it preserves scroll position when component is replaced', async function (assert) {
    let state = new TrackedObject({
      showIt: false,
    });

    await render(
      <template>
        <style type="text/css">
          .sample {
            height: 30px;
            overflow-y: scroll;
          }
          .sample > div {
            height: 100px;
          }
        </style>

        {{#if state.showIt}}
          {{#memoryScroll key="sample" class="sample"}}
            <div>
              sample content
            </div>
          {{/memoryScroll}}
        {{/if}}
      </template>,
    );

    state.showIt = true;
    await settled();
    assert.dom('.sample').hasText('sample content');
    this.$('.sample').scrollTop(50);
    state.showIt = false;
    await settled();
    assert.dom('.sample').doesNotExist();
    state.showIt = true;
    await settled();
    assert.equal(this.$('.sample').scrollTop(), 50);
  });

  test('it preserves independent scroll positions per key when component is replaced', async function (assert) {
    let state: { showIt: string } = new TrackedObject({
      showIt: '',
    });

    await render(
      <template>
        <style type="text/css">
          .sample {
            height: 30px;
            overflow-y: scroll;
          }
          .sample > div {
            height: 100px;
          }
        </style>

        {{#if state.showIt}}
          {{#memoryScroll key=state.showIt class="sample"}}
            <div>
              sample content
            </div>
          {{/memoryScroll}}
        {{/if}}
      </template>,
    );

    state.showIt = 'first';
    assert.equal(this.$('.sample').text().trim(), 'sample content');
    this.$('.sample').scrollTop(50);
    state.showIt = false;
    assert.equal(this.$('.sample').length, 0);
    state.showIt = 'second';
    assert.equal(this.$('.sample').scrollTop(), 0);
    state.showIt = false;
    state.showIt = 'first';
    assert.equal(this.$('.sample').scrollTop(), 50);
  });

  test('it preserves independent scroll positions per key when key changes', async function (assert) {
    let state: { showIt: string } = new TrackedObject({
      showIt: '',
    });
    await render(
      <template>
        <style type="text/css">
          .sample {
            height: 30px;
            overflow-y: scroll;
          }
          .sample > div {
            height: 100px;
          }
        </style>

        {{#if state.showIt}}
          {{#memoryScroll key=state.showIt class="sample"}}
            <div>
              sample content
            </div>
          {{/memoryScroll}}
        {{/if}}
      </template>,
    );

    state.showIt = 'first';
    assert.equal(this.$('.sample').text().trim(), 'sample content');
    this.$('.sample').scrollTop(50);
    state.showIt = 'second';
    assert.equal(this.$('.sample').scrollTop(), 0);
    state.showIt = 'first';
    assert.equal(this.$('.sample').scrollTop(), 50);
  });
});
