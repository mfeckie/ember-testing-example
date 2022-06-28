import { task } from 'ember-concurrency';

export function fakeTask(callback = function () {}) {
  class FakeTask {
    @task
    async fakeTask() {
      return callback(...arguments);
    }
  }
  const taskClass = new FakeTask();

  return taskClass.fakeTask;
}
