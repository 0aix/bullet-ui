/*
 *  Copyright 2016, Yahoo Inc.
 *  Licensed under the terms of the Apache License, Version 2.0.
 *  See the LICENSE file associated with the project for terms.
 */
import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['window-metadata'],
  classNameBindings: ['expanded:is-expanded'],
  expanded: false,
  expansionIconClasses: computed('expanded', function() {
    return this.get('expanded') ? 'fa fa-chevron-up' : 'fa fa-chevron-down';
  }),

  actions: {
    toggleExpanded() {
      this.toggleProperty('expanded');
    }
  }
});
