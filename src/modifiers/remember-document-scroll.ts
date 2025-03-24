import MemoryScrollModifier from './memory-scroll.ts';

export default class RememberDocumentScroll extends MemoryScrollModifier {
  scrollingElement() {
    return document.documentElement;
  }

  eventElement() {
    return document;
  }
}
