export class Test {
    firstName: string = "Derik";
    lastName: string = "Whittaker";

    constructor(first: string) {
        this.firstName = first;
    }
    SayName() {
        var tFirstName = this.firstName;
        alert(tFirstName + " " + this.lastName);
    }
}