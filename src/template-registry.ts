// Easily allow apps, which are not yet using strict mode templates, to consume your Glint types, by importing this file.
// Add all your components, helpers and modifiers to the template registry here, so apps don't have to do this.
// See https://typed-ember.gitbook.io/glint/environments/ember/authoring-addons

import type MemoryScroll from './components/memory-scroll.gts';
import type RememberDocumentScroll from './components/remember-document-scroll.gts';
import type ScrollTo from './components/scroll-to.gts';

import type memoryScroll from './modifiers/memory-scroll.ts';
import type rememberDocumentScroll from './modifiers/remember-document-scroll.ts';
import type scrollTo from './modifiers/scroll-to.ts';

export default interface Registry {
  MemoryScroll: typeof MemoryScroll;
  RememberDocumentScroll: typeof RememberDocumentScroll;
  ScrollTo: typeof ScrollTo;
  memoryScroll: typeof memoryScroll;
  rememberDocumentScrolll: typeof rememberDocumentScroll;
  scrollTo: typeof scrollTo;
}
