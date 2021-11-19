import Controller from '@ember/controller';
import { action } from '@ember/object';
import { _backburner } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';

export default class extends Controller {
  @tracked
  name = 'Aaron';

  constructor() {
    super(...arguments);
    window.cont = this;
    _backburner.on('begin', this.cb);
    let times = 0;
    let clear = setInterval(() => {
      this.name += '+';
      this.times++;
      if (times > 20) {
        clearInterval(clear);
      }
    }, 2000);
  }

  @action
  cb() {
    console.log('callback');
  }
}
