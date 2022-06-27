import Component from '@glimmer/component';

export class BreadcrumbItem {
  constructor({href, text}) {
    this.href = href
    this.text = text
  }
}

export class Divider {
  divider = true
}

export default class PatternsDataStructureBreadcrumbsComponent extends Component {}
