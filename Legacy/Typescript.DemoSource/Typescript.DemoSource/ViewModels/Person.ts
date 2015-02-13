
/// <reference path="Dog.ts" />

module mammal {
    
    export class Person {
        walkIt(dog: IWalkable) {
            dog.walk();
        }

        walkPack() {
            var dog = new Dog();
            var dingo = new Dingo();

            this.walkIt(dog);
            this.walkIt(dingo);
        }

    }
}