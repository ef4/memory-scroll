import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { TrackedObject } from 'tracked-built-ins';
import RememberDocumentScroll from '../src/components/remember-document-scroll';
import { scrollTo } from '@ember/test-helpers';
import { settled } from '@ember/test-helpers';

module('Integration | Component | remember document scroll', function (hooks) {
  setupRenderingTest(hooks);

  test('it controls document scroll position', async function (assert) {
    const state: { showIt: string | false } = new TrackedObject({
      showIt: false,
    });

    await render(
      <template>
        <style type="text/css">
          body {
            height: 30000px;
          }
        </style>

        {{#if state.showIt}}
          <RememberDocumentScroll @key={{state.showIt}} />
        {{/if}}
      </template>,
    );

    state.showIt = 'first';
    await scrollTo(document.documentElement, 0, 50);
    state.showIt = false;
    await scrollTo(document.documentElement, 0, 0);
    state.showIt = 'first';
    await settled();
    assert.equal(document.documentElement.scrollTop, 50);
  });
});
