import {scheduleRevalidate} from '@glimmer/global-context';

export function initialize(/* application */) {
  console.log('initializing', scheduleRevalidate);
  let prev = scheduleRevalidate;
  scheduleRevalidate = function() {
    console.log('revalidate');
    prev(...arguments);
  };
}

export default {
  initialize,
};
