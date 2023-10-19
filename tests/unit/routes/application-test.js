import { module, test } from 'qunit';
import { setupTest } from 'reproduce-unexpected-locale-with-ember-intl-v8/tests/helpers';

module('Unit | Route | application', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:application');
    assert.ok(route);
  });
});
