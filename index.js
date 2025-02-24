/* 1er exemple sans class
//? façon classique de déclarer une variable
let message = "Aloha !";

//? STRING
//? façon TypeScript de déclarer une variable
//* let message : string = "Bienvenue !";

//? NUMBER or STRING
//? façon TypeScript de déclarer une variable
let nb : number | string = 42;

//? ANT
//? n'importe quel type de variable
//* let message : any = "Bienvenue !";

//? UNKNOWN
//? nous ne savons pas quel est le type de la variable
//* let message : unknown = "Bienvenue !";

//? STRING or UNDEFINED
//? peut-être string ou indéfini
//* let message : string | undefined = "Bienvenue !";

//? NULL
//?
//* let message : null = "Bienvenue !";

const sayHello = function(){
  console.log(message);
}

const sayHello = function( text : string ) : void {
  console.log(text);
}

sayHello(message);

//* ne passera pas car la fonction 'sayHello' est de type 'string' et pas 'number'
sayHello(nb);
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personne = /** @class */ (function () {
    //? CONSTRUCTOR
    function Personne(first_name, last_name) {
        this._first_name = first_name;
        this._last_name = last_name;
    }
    Object.defineProperty(Personne.prototype, "First_name", {
        //? GETTER & SETTER
        //? First_name
        get: function () {
            return this._first_name;
        },
        //* user n'auront pas accès à la propriété first_name
        set: function (value) {
            this._first_name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "Last_name", {
        //? GETTER & SETTER
        //? Last_name
        get: function () {
            return this._last_name;
        },
        set: function (value) {
            this._last_name = value;
        },
        enumerable: false,
        configurable: true
    });
    //? METHODS
    Personne.prototype.introduceYourself = function () {
        console.log("Aloha, je m'appelle ".concat(this._first_name, " ").concat(this._last_name));
    };
    return Personne;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(first_name, last_name, job) {
        var _this = _super.call(this, first_name, last_name) || this;
        _this.job = job;
        return _this;
    }
    Employee.prototype.introduceYourself = function () {
        console.log("Aloha, je m'appelle ".concat(this.First_name, " ").concat(this.Last_name, " et je suis ").concat(this.job));
    };
    return Employee;
}(Personne));
/* MAIN PROGRAM */
var professor = new Employee("Lancelot", "Ckx", "Développeur");
// professor.introduceYourself();
var student = new Personne("Calynn", "Ckx");
// student.introduceYourself();
var groupOfPersons = [];
groupOfPersons.push(professor);
groupOfPersons.push(student);
groupOfPersons.push({
    First_name: "Xena",
    Last_name: "Ckx",
    introduceYourself: function () { return console.log("Aloha, je m'appelle Xena Ckx"); }
});
console.log(groupOfPersons);
groupOfPersons.forEach(function (person) { return person.introduceYourself(); });
