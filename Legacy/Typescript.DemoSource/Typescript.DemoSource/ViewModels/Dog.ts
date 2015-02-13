module mammal {
    export class Dog implements IWalkable {
       
        walk() {
            console.log("Taking Steps -- Dog");
        }
    }

    export class Dingo implements IWalkable {
        

        walk() {
            console.log("Taking Steps -- Dingo");
        }
    }

    export class Barker {
        bark(message) {
            console.log(message);
        }
    }

    export interface IPooper {
        Poops();
    }

    export interface IWalkable {
        walk();
    }
}
