import { get, set } from '@ember/object';
import Component from '@ember/component';
import layout from './template';
import VolumeSource from 'shared/mixins/volume-source';

const formats = [
  'json',
  'apache2',
  'nginx',
  'syslog',
  "rfc3164",
  "rfc5424",
].map(value => ({
  value,
  label: value,
}));

export default Component.extend(VolumeSource, {
  layout,
  formats,
  useCustomRegex: false,
  cachedFormat: null,

  field: 'flexVolume',
  initialCustomFormat: null,

  init() {
    this._super(...arguments);
    const format = get(this, 'config.options.format');
    if (formats.every(item => item.value !== format)) {
      set(this, 'useCustomRegex', true);
      set(this, 'initialCustomFormat', format);
    }
  },

  mount: function() {
    return get(this, 'mounts').get('firstObject');
  }.property('mounts.[]'),

  useCustomRegexChange: function() {
    const useCustomRegex = get(this, 'useCustomRegex');
    if (useCustomRegex) {
      set(this, 'cachedFormat', get(this, 'config.options.format'));
      set(this, 'config.options.format', get(this, 'initialCustomFormat'));
    } else {
      set(this, 'config.options.format', get(this, 'cachedFormat'));
    }
  }.observes('useCustomRegex'),

  actions: {
    remove() {
      this.sendAction('remove', get(this, 'model'));
    },
    useCustomRegex() {
      set(this, 'useCustomRegex', !get(this, 'useCustomRegex'));
    },
  }
});
