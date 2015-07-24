import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('memory-scroll', 'Integration | Component | memory scroll', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{memory-scroll}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#memory-scroll}}
      template block text
    {{/memory-scroll}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
