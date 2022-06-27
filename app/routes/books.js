import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { task } from 'ember-concurrency';

export default class BooksRoute extends Route {
  @service store;
  model() {
    this.bookFinder.perform();
    return this.bookFinder;
  }

  @task
  async bookFinder() {
    return this.store.findAll('book');
  }
}
