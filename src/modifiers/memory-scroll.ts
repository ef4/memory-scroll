import { service } from '@ember/service';
import Modifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';
import type MemoryScrollService from '../services/memory-scroll';
import type { ArgsFor } from 'ember-modifier';

interface Signature {
  Element: HTMLElement;
  Args: {
    Named: {
      key: string;
    };
  };
}

export default class MemoryScrollModifier extends Modifier<Signature> {
  @service('memoryScroll') declare memory: MemoryScrollService;

  #element: HTMLElement | undefined;
  #lastKey: string | undefined;

  modify(
    element: HTMLElement,
    _: ArgsFor<Signature>['positional'],
    { key }: ArgsFor<Signature>['named'],
  ) {
    if (!this.#element) {
      console.log('initializing');
      this.#element = element;
      let handler = () => {
        console.log('scroll handler fired');
        this.#remember(this.#lastKey);
      };
      element.addEventListener('scroll', handler);
      registerDestructor(this, () => {
        console.log('destroyed');
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
  #remember(key: string | undefined) {
    if (key && this.#element) {
      let position = this.#element.scrollTop;
      console.log(`memory set ${key} ${position}`);
      this.memory.memory.set(key, position);
    }
  }

  #restore(key: string) {
    if (this.#element) {
      let position = this.memory.memory.get(key) ?? 0;
      console.log(`restoring ${key} ${position}`);
      this.#element.scrollTo({ top: position });
    }
  }
}
