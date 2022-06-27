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

  test('it renders a list', async function (assert) {
    this.books = [
      { name: 'A Tale of Two Cities' },
      { name: 'Great Expectations' },
      { name: 'Oliver Twist' },
    ];
    await render(hbs`<BookList @books={{this.books}} />`);

    assert.dom('li').exists({ count: 3 });
  });
});
