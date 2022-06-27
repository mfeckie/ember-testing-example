import { module, test } from 'qunit';
import { setupRenderingTest } from 'testing-examples/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | patterns/yielded/breadcrumbs',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      await render(hbs`
      <Patterns::Yielded::Breadcrumbs as | B |>
        <B.Link>
          Link Name
        </B.Link>
        <B.Divider />
        <B.Link>
          Link Name 2
        </B.Link>
      </Patterns::Yielded::Breadcrumbs>
    `);

      assert.dom('p').exists({ count: 2 });
      assert.dom('div.divider').exists({ count: 1 });
    });
  }
);
