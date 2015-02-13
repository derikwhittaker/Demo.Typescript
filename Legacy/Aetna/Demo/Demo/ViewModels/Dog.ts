module Mammal{

    export interface IBarkable{
        bark(message: string)
    }
    export class Barkable implements IBarkable{
        bark(message: string) {
            console.log(message);
        }
    }

    export class Dog extends Barkable {
      
    }

    export class Dingo extends Barkable {
       
    }
}