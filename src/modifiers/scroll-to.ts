import Modifier from 'ember-modifier';
import type { ArgsFor } from 'ember-modifier';

interface Signature {
  Element: Element;
  Args: {
    Named: {
      position?: number;
      key?: string | number | undefined;
    };
  };
}

export default class ScrollToModifier extends Modifier<Signature> {
  #lastKey: string | number | undefined = '__initial_state_815203_';

  modify(
    _element: Element,
    _: ArgsFor<Signature>['positional'],
    { key, position }: ArgsFor<Signature>['named'],
  ) {
    if (key !== this.#lastKey) {
      this.#lastKey = key;
      document.documentElement.scrollTop = position ?? 0;
    }
  }
}
