import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'testing-examples/tests/helpers';

module('Acceptance | books acceptance', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /books', async function (assert) {
    await visit('/books');

    assert.strictEqual(currentURL(), '/books');

    assert.dom('li').exists({ count: 3 });
  });
});
