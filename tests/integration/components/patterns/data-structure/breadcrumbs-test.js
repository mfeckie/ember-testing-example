import { module, test } from 'qunit';
import { setupRenderingTest } from 'testing-examples/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import {
  BreadcrumbItem,
  Divider,
} from 'testing-examples/components/patterns/data-structure/breadcrumbs';

module(
  'Integration | Component | patterns/data-structure/breadcrumbs',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders with a data structure', async function (assert) {
      this.breadCrumbItems = [
        new BreadcrumbItem({ href: '/home', text: 'Home' }),
        new BreadcrumbItem({ href: '/away', text: 'Away' }),
        new BreadcrumbItem({ href: '/back-again', text: 'Back Again' }),
      ];
      await render(
        hbs`<Patterns::DataStructure::Breadcrumbs @breadCrumbItems={{this.breadCrumbItems}} />`
      );

      assert.dom('[data-href="/home"]').hasText('Home');

      assert.dom('.divider').exists({ count: 2 });

      assert.dom('[data-href="/away"]').hasText('Away');
    });

    test('With full control', async function (assert) {
      await render(
        hbs`<Patterns::DataStructure::Breadcrumbs>
          <Patterns::DataStructure::Breadcrumbs::Link @href="/home">
            Home
          </Patterns::DataStructure::Breadcrumbs::Link>
          <Patterns::DataStructure::Breadcrumbs::Divider />
          <Patterns::DataStructure::Breadcrumbs::Link @href="/away">
            Away
          </Patterns::DataStructure::Breadcrumbs::Link>
        </Patterns::DataStructure::Breadcrumbs>`
      );

      assert.dom('[data-href="/home"]').hasText('Home');

      assert.dom('.divider').exists({ count: 1 });

      assert.dom('[data-href="/away"]').hasText('Away');
    });
  }
);
