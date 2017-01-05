/*
 *  Copyright 2016, Yahoo Inc.
 *  Licensed under the terms of the Apache License, Version 2.0.
 *  See the LICENSE file associated with the project for terms.
 */
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('queries', function() {
    this.route('new');
  });
  this.route('query', { path: 'query/:query_id' });

  this.route('result', { path: 'result/:result_id' });

  this.route('error');
  this.route('missing', { path: '*path' });
  this.route('schema');
});

export default Router;