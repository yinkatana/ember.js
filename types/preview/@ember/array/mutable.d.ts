declare module '@ember/array/mutable' {
  import Mixin from '@ember/object/mixin';
  import MutableEnumerable from '@ember/array/-private/mutable-enumerable';
  import EmberArray from '@ember/array';

  type AnyArray<T> = EmberArray<T> | Array<T>;

  /**
   * This mixin defines the API for modifying array-like objects. These methods
   * can be applied only to a collection that keeps its items in an ordered set.
   * It builds upon the Array mixin and adds methods to modify the array.
   * One concrete implementations of this class include ArrayProxy.
   */
  interface MutableArray<T> extends EmberArray<T>, MutableEnumerable {
    /**
     * __Required.__ You must implement this method to apply this mixin.
     */
    replace(idx: number, amt: number, objects: T[]): void;
    /**
     * Remove all elements from the array. This is useful if you
     * want to reuse an existing array without having to recreate it.
     */
    clear(): this;
    /**
     * This will use the primitive `replace()` method to insert an object at the
     * specified index.
     */
    insertAt(idx: number, object: T): this;
    /**
     * Remove an object at the specified index using the `replace()` primitive
     * method. You can pass either a single index, or a start and a length.
     */
    removeAt(start: number, len?: number): this;
    /**
     * Push the object onto the end of the array. Works just like `push()` but it
     * is KVO-compliant.
     */
    pushObject(obj: T): T;
    /**
     * Add the objects in the passed numerable to the end of the array. Defers
     * notifying observers of the change until all objects are added.
     */
    pushObjects(objects: AnyArray<T>): this;
    /**
     * Pop object from array or nil if none are left. Works just like `pop()` but
     * it is KVO-compliant.
     */
    popObject(): T | null | undefined;
    /**
     * Shift an object from start of array or nil if none are left. Works just
     * like `shift()` but it is KVO-compliant.
     */
    shiftObject(): T | null | undefined;
    /**
     * Unshift an object to start of array. Works just like `unshift()` but it is
     * KVO-compliant.
     */
    unshiftObject(obj: T): T;
    /**
     * Adds the named objects to the beginning of the array. Defers notifying
     * observers until all objects have been added.
     */
    unshiftObjects(objects: AnyArray<T>): this;
    /**
     * Reverse objects in the array. Works just like `reverse()` but it is
     * KVO-compliant.
     */
    reverseObjects(): this;
    /**
     * Replace all the receiver's content with content of the argument.
     * If argument is an empty array receiver will be cleared.
     */
    setObjects(objects: AnyArray<T>): this;
    /**
     * __Required.__ You must implement this method to apply this mixin.
     */
    removeObject(object: T): T;
    /**
     * Removes each object in the passed array from the receiver.
     */
    removeObjects(objects: AnyArray<T>): this;
    /**
     * __Required.__ You must implement this method to apply this mixin.
     */
    addObject(object: T): this;
    /**
     * Adds each object in the passed enumerable to the receiver.
     */
    addObjects(objects: AnyArray<T>): this;
  }

  const MutableArray: Mixin;
  export default MutableArray;
}
