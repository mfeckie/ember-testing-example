import { module, test } from 'qunit';
import { setupRenderingTest } from 'testing-examples/tests/helpers';
import { render, waitFor } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { fakeTask } from '../../helpers/fake-task';

module('Integration | Component | book-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders an empty message', async function (assert) {
    await render(hbs`<BookList />`);

    assert.dom('li').hasText('Nothing to see here');
  });

  test('it renders a list', async function (assert) {
    this.books = fakeTask(() => [
      { name: 'A Tale of Two Cities' },
      { name: 'Great Expectations' },
      { name: 'Oliver Twist' },
    ]);

    this.books.perform();

    await render(hbs`<BookList @books={{this.books}} />`);

    assert.dom('li').exists({ count: 3 });
  });

  test('it shows a loading spinner when loading', async function (assert) {
    this.books = { isRunning: true };

    await render(hbs`<BookList @books={{this.books}} />`);

    assert.dom('div.loading').exists();
  });

  test('Can model spinner and resolution with fakeTask', async function (assert) {
    let resolver;

    this.books = fakeTask(() => {
      // Return a Promise with a handle to the resolve function
      // so we can manually call it later.
      return new Promise((resolve) => {
        resolver = resolve;
      });
    });

    this.books.perform();

    await render(hbs`<BookList @books={{this.books}} />`);

    assert.dom('div.loading').exists();

    resolver([
      { name: 'A Tale of Two Cities' },
      { name: 'Great Expectations' },
    ]);

    await waitFor('li');

    assert.dom('div.loading').doesNotExist();
    assert.dom('li').exists({ count: 2 });
  });

  test('it shows a loading spinner when loading', async function (assert) {
    this.books = fakeTask(() => {
      return Promise.reject();
    });

    // Catching error here because otherwise it causes a global failure in the test suite
    this.books.perform().catch();

    await render(hbs`<BookList @books={{this.books}} />`);

    assert.dom('div.error').exists();
  });
});
