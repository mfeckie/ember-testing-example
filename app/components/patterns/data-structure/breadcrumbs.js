import Component from '@glimmer/component';

export class BreadcrumbItem {
  constructor({ href, text }) {
    this.href = href;
    this.text = text;
  }
}

export class Divider {
  divider = true;
}

export default class PatternsDataStructureBreadcrumbsComponent extends Component {
  get lastItemIndex() {
    return this.args.breadCrumbItems.length - 1;
  }
  get withDividers() {
    return this.args.breadCrumbItems.flatMap((item, index) => {
      if (index === this.lastItemIndex) return item;
      return [item, new Divider()];
    });
  }
}
