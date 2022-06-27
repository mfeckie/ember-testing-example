import { module, test } from 'qunit';
import { setupRenderingTest } from 'testing-examples/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | book-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders an empty message', async function (assert) {
    await render(hbs`<BookList />`);

    assert.dom('li').hasText('Nothing to see here');
  });
});
