# Memory-scroll

This addon provides an Ember component that remembers its last scroll
position and restores it the next time it renders.

```handlebars
{{!- The key is required, and its how we decide what constitutes "the same" component at some point in the future. -}}
{{#memory-scroll key="my-fancy-pane"}}
  {{#each items as |item|}}
    {{#link-to "detail" item}}{{item.id}}: {{item.value}}{{/link-to}}
  {{/each}}
{{/memory-scroll}}
```

`{{memory-scroll}}` does just two things: when its about to be
destroyed it saves its scroll position into a Service (which is
Ember's standard way to maintain long-lived application state). And
when it's just been rendered, it looks in the service to see if it
should set its scroll position.

All the rest is up to you, so it's easy to use as a drop-in
replacement for any `<div>` that is already styled for scrolling.
