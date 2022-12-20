/**
  *Provides **preview** type definitions for Ember.js.*

  These types are maintained by hand and the types provided here are unstable
  and subject to change without warning, though we make a best effort to keep
  churn to a minimum while we work to stabilize Ember's types.

  To use these type definitions, add these import to any TypeScript file in your
  Ember app or addon:

  ```ts
  import 'ember-source/types';
  import 'ember-source/types/preview';
  ```

  As Ember's types become more stable, this will automatically give you the
  latest mix of stable and preview types, with no effort from you.

  @module
 */

// This works because each of these modules presents `declare module` definition
// of the module and *only* that, so importing this file in turn makes those
// module declarations "visible" automatically throughout a consuming project.
// Combined with use of `typesVersions` (or, in the future, possibly `exports`)
// in `package.json`, this allows users to import the types without knowing the
// exact layout details.
//
// Somewhat annoyingly, every single module in the graph must appear here. For
// now, while we are publishing ambient types, that means we must maintain this
// by hand. When we start emitting types from the source, we will need to do the
// same work, but automatically.

import './ember';
import './ember/-private/type-utils';

import './@ember/component';
import './@ember/component/-private/class-names-support';
import './@ember/component/-private/core-view';
import './@ember/component/-private/glimmer-interfaces';
import './@ember/component/-private/signature-utils';
import './@ember/component/-private/view-mixin';
import './@ember/component/helper';
import './@ember/component/template-only';

import './@ember/destroyable';

import './@ember/helper';

import './@ember/modifier';

import './@ember/polyfills';
import './@ember/polyfills/types';

import './@ember/runloop';
import './@ember/runloop/-private/backburner';
import './@ember/runloop/-private/types';
import './@ember/runloop/types';

import './@ember/service';

import './@ember/string';

import './@ember/template';
import './@ember/template/-private/handlebars';

import './@ember/test';
import './@ember/test/adapter';

import './@ember/utils';
import './@ember/utils/-private/types';
