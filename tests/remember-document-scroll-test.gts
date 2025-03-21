import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { TrackedObject } from 'tracked-built-ins';
import rememberDocumentScroll from '../src/components/remember-document-scroll';

module('Integration | Component | remember document scroll', function (hooks) {
  setupRenderingTest(hooks);

  test('it controls document scroll position', async function (assert) {
    let state: { showIt: string | boolean } = new TrackedObject({
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
          {{rememberDocumentScroll key=state.showIt}}
        {{/if}}
      </template>,
    );

    state.showIt = 'first';
    document.documentElement.scrollTo({ top: 50 });
    state.showIt = false;
    document.documentElement.scrollTo({ top: 50 });
    state.showIt = 'first';
    assert.equal(document.documentElement.scrollTop, 50);
  });
});
