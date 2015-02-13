/// <reference path="IWalkable.ts" />

module Mammal {

    export class Barker {
        bark(message: string) {
            console.log(message);
        }
    }

    export class Dog extends Barker implements IWalkable {

        walk() {
            console.log("the dog is walking");
        }

    }

    export class Dingo extends Barker implements IWalkable {
       
        walk() {
            console.log("the dingo is walking");
        }
    }
}
