define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/controllers/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass jshint.');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _dummyTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/memory-scroll-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('memory-scroll', 'Integration | Component | memory scroll', {
    integration: true
  });

  (0, _emberQunit.test)('it preserves scroll position when component is replaced', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              'fragmentReason': false,
              'revision': 'Ember@2.6.2',
              'loc': {
                'source': null,
                'start': {
                  'line': 13,
                  'column': 6
                },
                'end': {
                  'line': 17,
                  'column': 6
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('        ');
              dom.appendChild(el0, el1);
              var el1 = dom.createElement('div');
              var el2 = dom.createTextNode('\n          sample content\n        ');
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode('\n');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 12,
                'column': 4
              },
              'end': {
                'line': 18,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['block', 'memory-scroll', [], ['key', 'sample', 'class', 'sample'], 0, null, ['loc', [null, [13, 6], [17, 24]]]]],
          locals: [],
          templates: [child0]
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['multiple-nodes', 'wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 19,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createElement('style');
          dom.setAttribute(el1, 'type', 'text/css');
          var el2 = dom.createTextNode('\n      .sample {\n        height: 30px;\n        overflow-y: scroll;\n      }\n      .sample > div {\n        height: 100px;\n      }\n    ');
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [['block', 'if', [['get', 'showIt', ['loc', [null, [12, 10], [12, 16]]]]], [], 0, null, ['loc', [null, [12, 4], [18, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    this.set('showIt', true);
    assert.equal(this.$('.sample').text().trim(), 'sample content');
    this.$('.sample').scrollTop(50);
    this.set('showIt', false);
    assert.equal(this.$('.sample').length, 0);
    this.set('showIt', true);
    assert.equal(this.$('.sample').scrollTop(), 50);
  });

  (0, _emberQunit.test)('it preserves independent scroll positions per key when component is replaced', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              'fragmentReason': false,
              'revision': 'Ember@2.6.2',
              'loc': {
                'source': null,
                'start': {
                  'line': 13,
                  'column': 6
                },
                'end': {
                  'line': 17,
                  'column': 6
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('        ');
              dom.appendChild(el0, el1);
              var el1 = dom.createElement('div');
              var el2 = dom.createTextNode('\n          sample content\n        ');
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode('\n');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 12,
                'column': 4
              },
              'end': {
                'line': 18,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['block', 'memory-scroll', [], ['key', ['subexpr', '@mut', [['get', 'showIt', ['loc', [null, [13, 27], [13, 33]]]]], [], []], 'class', 'sample'], 0, null, ['loc', [null, [13, 6], [17, 24]]]]],
          locals: [],
          templates: [child0]
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['multiple-nodes', 'wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 19,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createElement('style');
          dom.setAttribute(el1, 'type', 'text/css');
          var el2 = dom.createTextNode('\n      .sample {\n        height: 30px;\n        overflow-y: scroll;\n      }\n      .sample > div {\n        height: 100px;\n      }\n    ');
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [['block', 'if', [['get', 'showIt', ['loc', [null, [12, 10], [12, 16]]]]], [], 0, null, ['loc', [null, [12, 4], [18, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    this.set('showIt', 'first');
    assert.equal(this.$('.sample').text().trim(), 'sample content');
    this.$('.sample').scrollTop(50);
    this.set('showIt', false);
    assert.equal(this.$('.sample').length, 0);
    this.set('showIt', 'second');
    assert.equal(this.$('.sample').scrollTop(), 0);
    this.set('showIt', false);
    this.set('showIt', 'first');
    assert.equal(this.$('.sample').scrollTop(), 50);
  });

  (0, _emberQunit.test)('it preserves independent scroll positions per key when key changes', function (assert) {
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              'fragmentReason': false,
              'revision': 'Ember@2.6.2',
              'loc': {
                'source': null,
                'start': {
                  'line': 13,
                  'column': 6
                },
                'end': {
                  'line': 17,
                  'column': 6
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('        ');
              dom.appendChild(el0, el1);
              var el1 = dom.createElement('div');
              var el2 = dom.createTextNode('\n          sample content\n        ');
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode('\n');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 12,
                'column': 4
              },
              'end': {
                'line': 18,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['block', 'memory-scroll', [], ['key', ['subexpr', '@mut', [['get', 'showIt', ['loc', [null, [13, 27], [13, 33]]]]], [], []], 'class', 'sample'], 0, null, ['loc', [null, [13, 6], [17, 24]]]]],
          locals: [],
          templates: [child0]
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['multiple-nodes', 'wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 19,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createElement('style');
          dom.setAttribute(el1, 'type', 'text/css');
          var el2 = dom.createTextNode('\n      .sample {\n        height: 30px;\n        overflow-y: scroll;\n      }\n      .sample > div {\n        height: 100px;\n      }\n    ');
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [['block', 'if', [['get', 'showIt', ['loc', [null, [12, 10], [12, 16]]]]], [], 0, null, ['loc', [null, [12, 4], [18, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    this.set('showIt', 'first');
    assert.equal(this.$('.sample').text().trim(), 'sample content');
    this.$('.sample').scrollTop(50);
    this.set('showIt', 'second');
    assert.equal(this.$('.sample').scrollTop(), 0);
    this.set('showIt', 'first');
    assert.equal(this.$('.sample').scrollTop(), 50);
  });
});
define('dummy/tests/integration/components/memory-scroll-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/memory-scroll-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/memory-scroll-test.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/remember-document-scroll-test', ['exports', 'ember', 'ember-qunit'], function (exports, _ember, _emberQunit) {
  (0, _emberQunit.moduleForComponent)('remember-document-scroll', 'Integration | Component | remember document scroll', {
    integration: true
  });

  (0, _emberQunit.test)('it controls document scroll position', function (assert) {
    this.render(_ember['default'].HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 8,
                'column': 4
              },
              'end': {
                'line': 10,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [['inline', 'remember-document-scroll', [], ['key', ['subexpr', '@mut', [['get', 'showIt', ['loc', [null, [9, 37], [9, 43]]]]], [], []]], ['loc', [null, [9, 6], [9, 45]]]]],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['multiple-nodes', 'wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 11,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createElement('style');
          dom.setAttribute(el1, 'type', 'text/css');
          var el2 = dom.createTextNode('\n      body {\n        height: 30000px;\n      }\n    ');
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [['block', 'if', [['get', 'showIt', ['loc', [null, [8, 10], [8, 16]]]]], [], 0, null, ['loc', [null, [8, 4], [10, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })()));
    this.set('showIt', 'first');
    _ember['default'].$(document).scrollTop(50);
    this.set('showIt', false);
    _ember['default'].$(document).scrollTop(0);
    this.set('showIt', 'first');
    assert.equal(_ember['default'].$(document).scrollTop(), 50);
  });
});
define('dummy/tests/integration/components/remember-document-scroll-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/remember-document-scroll-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/remember-document-scroll-test.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/scroll-to-test', ['exports', 'ember-qunit', 'ember'], function (exports, _emberQunit, _ember) {

  (0, _emberQunit.moduleForComponent)('scroll-to', 'Integration | Component | scroll to', {
    integration: true
  });

  (0, _emberQunit.test)('it scrolls document at initial render', function (assert) {
    var doc = _ember['default'].$(document);
    this.render(_ember['default'].HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 8,
                'column': 4
              },
              'end': {
                'line': 10,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [['inline', 'scroll-to', [], ['position', 17], ['loc', [null, [9, 6], [9, 31]]]]],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['multiple-nodes', 'wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 11,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createElement('style');
          dom.setAttribute(el1, 'type', 'text/css');
          var el2 = dom.createTextNode('\n      body {\n        height: 30000px;\n      }\n    ');
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [['block', 'if', [['get', 'showIt', ['loc', [null, [8, 10], [8, 16]]]]], [], 0, null, ['loc', [null, [8, 4], [10, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })()));
    this.set('showIt', 'first');
    assert.equal(doc.scrollTop(), 17);
  });

  (0, _emberQunit.test)('it scrolls document at initial render with key', function (assert) {
    var doc = _ember['default'].$(document);
    this.set('key', 1);
    this.render(_ember['default'].HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 8,
                'column': 4
              },
              'end': {
                'line': 10,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [['inline', 'scroll-to', [], ['position', 17, 'key', ['subexpr', '@mut', [['get', 'key', ['loc', [null, [9, 34], [9, 37]]]]], [], []]], ['loc', [null, [9, 6], [9, 39]]]]],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['multiple-nodes', 'wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 11,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createElement('style');
          dom.setAttribute(el1, 'type', 'text/css');
          var el2 = dom.createTextNode('\n      body {\n        height: 30000px;\n      }\n    ');
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [['block', 'if', [['get', 'showIt', ['loc', [null, [8, 10], [8, 16]]]]], [], 0, null, ['loc', [null, [8, 4], [10, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })()));
    this.set('showIt', 'first');
    assert.equal(doc.scrollTop(), 17);
  });

  (0, _emberQunit.test)('it scrolls document when key changes', function (assert) {
    var doc = _ember['default'].$(document);
    this.set('key', 1);
    this.render(_ember['default'].HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.6.2',
            'loc': {
              'source': null,
              'start': {
                'line': 8,
                'column': 4
              },
              'end': {
                'line': 10,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [['inline', 'scroll-to', [], ['position', 17, 'key', ['subexpr', '@mut', [['get', 'key', ['loc', [null, [9, 34], [9, 37]]]]], [], []]], ['loc', [null, [9, 6], [9, 39]]]]],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['multiple-nodes', 'wrong-type']
          },
          'revision': 'Ember@2.6.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 11,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createElement('style');
          dom.setAttribute(el1, 'type', 'text/css');
          var el2 = dom.createTextNode('\n      body {\n        height: 30000px;\n      }\n    ');
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [['block', 'if', [['get', 'showIt', ['loc', [null, [8, 10], [8, 16]]]]], [], 0, null, ['loc', [null, [8, 4], [10, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })()));
    this.set('showIt', 'first');
    doc.scrollTop(0);
    this.set('key', 2);
    assert.equal(doc.scrollTop(), 17);
  });
});
define('dummy/tests/integration/components/scroll-to-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/scroll-to-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/scroll-to-test.js should pass jshint.');
  });
});
define('dummy/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('dummy/tests/transitions.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | transitions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
