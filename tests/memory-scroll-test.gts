import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { TrackedObject } from 'tracked-built-ins';
import { settled } from '@ember/test-helpers';
import MemoryScroll from '../src/components/memory-scroll';
import { scrollTo } from '@ember/test-helpers';

module('Integration | Component | memory scroll', function (hooks) {
  setupRenderingTest(hooks);

  test('it preserves scroll position when component is replaced', async function (assert) {
    const state = new TrackedObject({
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
          <MemoryScroll @key="sample" class="sample">
            <div>
              sample content
            </div>
          </MemoryScroll>
        {{/if}}
      </template>,
    );

    state.showIt = true;
    await settled();
    assert.dom('.sample').hasText('sample content');
    await scrollTo('.sample', 0, 50);
    state.showIt = false;
    await settled();
    assert.dom('.sample').doesNotExist();
    state.showIt = true;
    await settled();
    assert.equal(document.querySelector('.sample')!.scrollTop, 50);
  });

  test('it preserves independent scroll positions per key when component is replaced', async function (assert) {
    const state: { showIt: string | false } = new TrackedObject({
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
          <MemoryScroll @key={{state.showIt}} class="sample">
            <div>
              sample content
            </div>
          </MemoryScroll>
        {{/if}}
      </template>,
    );

    state.showIt = 'first';
    await settled();
    assert.dom('.sample').hasText('sample content');
    await scrollTo('.sample', 0, 50);
    state.showIt = false;
    await settled();
    assert.dom('.sample').doesNotExist();
    state.showIt = 'second';
    await settled();
    assert.equal(document.querySelector('.sample')!.scrollTop, 0);
    state.showIt = false;
    await settled();
    state.showIt = 'first';
    await settled();
    assert.equal(document.querySelector('.sample')!.scrollTop, 50);
  });

  test('it preserves independent scroll positions per key when key changes', async function (assert) {
    const state: { showIt: string } = new TrackedObject({
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
          <MemoryScroll @key={{state.showIt}} class="sample">
            <div>
              sample content
            </div>
          </MemoryScroll>
        {{/if}}
      </template>,
    );

    state.showIt = 'first';
    await settled();
    assert.dom('.sample').hasText('sample content');
    await scrollTo('.sample', 0, 50);
    state.showIt = 'second';
    await settled();
    assert.equal(document.querySelector('.sample')!.scrollTop, 0);
    state.showIt = 'first';
    await settled();
    assert.equal(document.querySelector('.sample')!.scrollTop, 50);
  });
});
