// Extending the `@ember/owner` types with the Service registry. This is safe
// and does not cause circularities, and also works cleanly with our types
// publishing infrastructure. The infra knows how to handle `declare module`
// but *TS* doesn't know what to do with `import` statements like this when they
// are part of a module augmentation in a regular `.ts` source file, and we
// cannot rely on the `@ember/service` module's `Registry` being in the parent
// scope because once we run the infra, it *won't* be: it will be part of a
// `declare module` statement instead.
declare module '@ember/owner' {
  import type { Registry as ServiceRegistry } from '@ember/service';

  export interface DIRegistry {
    service: ServiceRegistry;
  }
}
