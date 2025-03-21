import MemoryScrollModifier from './memory-scroll.ts';

export default class RememberDocumentScroll extends MemoryScrollModifier {
  targetElement() {
    return document.documentElement;
  }
}
