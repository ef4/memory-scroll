import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { TrackedObject } from 'tracked-built-ins';
import scrollTo from '../src/components/scroll-to';

module('Integration | Component | scroll to', function (hooks) {
  setupRenderingTest(hooks);

  test('it scrolls document at initial render', async function (assert) {
    let state: { showIt: string } = new TrackedObject({ showIt: '' });

    await render(
      <template>
        <style type="text/css">
          body {
            height: 30000px;
          }
        </style>

        {{#if state.showIt}}
          {{scrollTo position=17}}
        {{/if}}
      </template>,
    );
    state.showIt = 'first';
    await settled();
    assert.equal(document.documentElement.scrollTop, 17);
  });

  test('it scrolls document at initial render with key', async function (assert) {
    let state: { showIt: string | undefined; key: number } = new TrackedObject({
      showIt: undefined,
      key: 1,
    });

    this.set('key', 1);
    await render(
      <template>
        <style type="text/css">
          body {
            height: 30000px;
          }
        </style>

        {{#if state.showIt}}
          {{scrollTo position=17 key=state.key}}
        {{/if}}
      </template>,
    );
    state.showIt = 'first';
    await settled();
    assert.equal(document.documentElement.scrollTop, 17);
  });

  test('it scrolls document when key changes', async function (assert) {
    let state: { showIt: string | undefined; key: number } = new TrackedObject({
      showIt: undefined,
      key: 1,
    });

    await render(
      <template>
        <style type="text/css">
          body {
            height: 30000px;
          }
        </style>

        {{#if state.showIt}}
          {{scrollTo position=17 key=state.key}}
        {{/if}}
      </template>,
    );
    state.showIt = 'first';
    await settled();
    document.documentElement.scrollTo({ top: 0 });
    state.key = 2;
    await settled();
    assert.equal(document.documentElement.scrollTop, 17);
  });
});
