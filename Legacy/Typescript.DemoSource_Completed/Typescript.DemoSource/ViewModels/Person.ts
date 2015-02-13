/// <reference path="IWalkable.ts" />
/// <reference path="Dog.ts" />

module Mammal {
    export class Person {
        walkIt(walker: IWalkable) {
            walker.walk();
        }

        walkPack() {
            var dog = new Dog();
            var dingo = new Dingo();

            this.walkIt(dog);
            this.walkIt(dingo);
        }
    }
}
