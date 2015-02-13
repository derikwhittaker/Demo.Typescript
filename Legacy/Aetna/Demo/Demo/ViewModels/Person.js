var Mammal;
(function (Mammal) {
    var Person = (function () {
        function Person() {
        }
        Person.prototype.walkEveryone = function () {
            this.walkIt(new Mammal.Dog());
            this.walkIt(new Mammal.Dingo());
        };

        Person.prototype.walkIt = function (barable) {
            barable.bark("woof woof");
        };
        return Person;
    })();
    Mammal.Person = Person;
})(Mammal || (Mammal = {}));
