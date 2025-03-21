import { service } from '@ember/service';
import Modifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';
import type MemoryScrollService from '../services/memory-scroll';
import type { ArgsFor } from 'ember-modifier';

interface Signature {
  Element: Element;
  Args: {
    Named: {
      key: string | number;
    };
  };
}

export default class MemoryScrollModifier extends Modifier<Signature> {
  @service('memoryScroll') declare memory: MemoryScrollService;

  #element: Element | undefined;
  #lastKey: string | number | undefined;

  protected targetElement(ownElement: Element): Element {
    return ownElement;
  }

  modify(
    element: Element,
    _: ArgsFor<Signature>['positional'],
    { key }: ArgsFor<Signature>['named'],
  ) {
    if (!this.#element) {
      element = this.targetElement(element);
      this.#element = element;
      let handler = () => {
        this.#remember(this.#lastKey);
      };
      element.addEventListener('scroll', handler);
      registerDestructor(this, () => {
        element.removeEventListener('scroll', handler);
      });
    }
    if (!key) {
      throw new Error(
        'You must provide a key to memoryScroll like {{memoryScroll key="my-awesome-pane"}}.',
      );
    }
    if (key !== this.#lastKey) {
      this.#remember(this.#lastKey);
      this.#lastKey = key;
      this.#restore(key);
    }
  }
  #remember(key: string | number | undefined) {
    if (key && this.#element) {
      let position = this.#element.scrollTop;
      this.memory.memory.set(key, position);
    }
  }

  #restore(key: string | number) {
    if (this.#element) {
      let position = this.memory.memory.get(key) ?? 0;
      this.#element.scrollTo({ top: position });
    }
  }
}
