# Memory-scroll

[Demo App](https://ef4.github.io/memory-scroll/)

This addon provides Ember components that help you avoiding losing the
user's scroll positions unexpectedly as they navigate through the app.

# Components

## memory-scroll

Example:

```handlebars
{{#memory-scroll key="my-fancy-pane"}}
  {{#each items as |item|}}
    {{#link-to "detail" item}}{{item.id}}: {{item.value}}{{/link-to}}
  {{/each}}
{{/memory-scroll}}
```

`{{memory-scroll}}` does just two things: when its about to be
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

```handlebars
{{#memory-scroll key=(concat "person-detail/" model.id) }}
```

## remember-document-scroll

If instead you want to remember the scroll position of the document itself, you can use:

```handlebars
{{remember-document-scroll key=model.id}}
```

Its key works the same way as `memory-scroll`, but it reads and writes `$(document).scrollTop()`.

## scroll-to

Example:

```handlebars
{{scroll-to position=0 key=model.id}}
```

This component always scrolls the document to the given position when it renders and when the key changes.
