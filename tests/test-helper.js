import Application from 'reproduce-unexpected-locale-with-ember-intl-v8/app';
import config from 'reproduce-unexpected-locale-with-ember-intl-v8/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
