# Memory Scroll

This addon provides Ember modifiers and components that help you avoiding losing
the user's scroll positions unexpectedly as they navigate through the app.

### Installation

```
pnpm add --save-dev memory-scroll
```

# Modifiers

## memoryScroll

Example:

```gts
import memoryScroll from "memory-scroll/modifiers/memory-scroll";

<template>
  <div {{memoryScroll key="my-fancy-pane"}}>
    {{#each items as |item|}}
      <a href={{item.url}}>{{item.name}}</a>
    {{/each}}
  </div>
</template>
```

`memoryScroll` does just two things: when its about to be
destroyed it saves its element's scroll position into a Service (which
is Ember's standard way to maintain long-lived application state). And
when it's just been rendered, it looks in the service to see if it
should set its scroll position.

The `key` attribute is mandatory and it determines what constitutes
"the same" element that should share memory. The simplest usage is
to use a constant string ID. A more advanced usage is to use part of
your model data so the memory is context-dependent, like:

```hbs
<div {{memoryScroll key=(concat "person-detail/" model.id) }}>
```

## rememberDocumentScroll

If instead you want to remember the scroll position of the document itself, you can use:

```gts
import rememberDocumentScroll from "memory-scroll/modifiers/remember-document-scroll";

<template><div {{rememberDocumentScroll key=model.id}} /></template>
```

Its key works the same way as `memoryScroll`, but it reads and writes `document.documentElement.scrollTop()`.

## scrollTo

This modifier always scrolls the document to the given position when it renders and when the key changes.

Example:

```gts
import scrollTo from "memory-scroll/modifiers/scroll-to";

<template>
  <div {{scrollTo position=0 key=model.id}} />
</template>
```

# Components

## MemoryScroll

Example:

```gts
import MemoryScroll from "memory-scroll/components/memory-scroll";

<template>
  <MemoryScroll @key="my-fancy-pane">
    {{#each items as |item|}}
      <a href={{item.url}}>{{item.name}}</a>
    {{/each}}
  </MemoryScroll>
</template>
```

`MemoryScroll` does just two things: when its about to be
destroyed it saves its element's scroll position into a Service (which
is Ember's standard way to maintain long-lived application state). And
when it's just been rendered, it looks in the service to see if it
should set its scroll position.

All the rest is up to you, so it's easy to use as a drop-in
replacement for any `<div>` that is already styled for scrolling.

The `key` attribute is mandatory and it determines what constitutes
"the same" component that should share memory. The simplest usage is
to use a constant string ID. A more advanced usage is to use part of
your model data so the memory is context-dependent, like:

```gts
<template><MemoryScroll @key="person-detail/{{model.id}}" /></template>
```

## RememberDocumentScroll

If instead you want to remember the scroll position of the document itself, you can use:

```gts
import RememberDocumentScroll from "memory-scroll/components/remember-document-scroll";

<template><RememberDocumentScroll @key={{model.id}} /></template>
```

Its key works the same way as `MemoryScroll`, but it reads and writes `document.documentElement.scrollTop()`.

## ScrollTo

This component always scrolls the document to the given position when it renders and when the key changes.

Example:

```gts
import ScrollTo from "memory-scroll/components/scroll-to";

<template>
  <ScrollTo @position={{0}} @key={{model.id}} />
</template>
```

