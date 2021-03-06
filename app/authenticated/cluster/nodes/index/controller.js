import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { headersCluster as hostHeaders } from 'shared/components/node-row/component';
import { get, computed } from '@ember/object';

export default Controller.extend({
  growl:             service(),
  prefs:             service(),
  scope:             service(),

  sortBy:            'name',
  queryParams:       ['sortBy'],
  searchText:        '',
  headers:           hostHeaders,

  extraSearchFields: [
    'displayUserLabelStrings',
    'requireAnyLabelStrings',
  ],

  actions: {
    scaleDownPool(id) {
      get(this,'model.cluster').send('scaleDownPool',id);
    },

    scaleUpPool(id) {
      get(this,'model.cluster').send('scaleUpPool',id);
    },

    editCluster() {
      get(this,'model.cluster').send('edit');
    },
  },

  groupByKey: computed('model.cluster.nodePools.length', function() {
    if ( get(this, 'model.cluster.nodePools.length') ) {
      return 'nodePoolId';
    }

    return null;
  }),

  rows: computed('model.nodes.@each.clusterId', function() {
    return get(this,'model.nodes').filterBy('clusterId', get(this,'model.cluster.id'));
  }),
});
