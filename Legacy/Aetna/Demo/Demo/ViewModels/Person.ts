/// <reference path="Dog.ts" />


module Mammal {

    export class Person {

        walkEveryone() {
            this.walkIt(new Mammal.Dog());
            this.walkIt(new Mammal.Dingo());
        }

        walkIt(barable: IBarkable) {
            barable.bark("woof woof");
        }
    }
}