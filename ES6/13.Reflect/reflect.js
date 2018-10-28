/**
 * Reflect get()
 * @type {{foo: number, bar: number, baz: *}}
 */
var myObje = {
    foo: 1,
    bar: 2,
    get baz() {
        return this.foo + this.bar
    }

};
var baz = Reflect.get(myObje, 'baz');
console.log(`baz:${baz}`);
var myReceiverObject={
    foo:4,
    bar:4
};
baz = baz = Reflect.get(myObje, 'baz',myReceiverObject);
console.log(`bazReceiver:${baz}`);