import Application from 'testing-examples/app';
import config from 'testing-examples/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

let worker;

QUnit.begin(async function () {
  const handlers = await import('/mocks/browser.js');
  worker = handlers.worker;
  handlers.worker.start();
});

QUnit.done(function () {
  worker.stop();
});

setup(QUnit.assert);

start();
