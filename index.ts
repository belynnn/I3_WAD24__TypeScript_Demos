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

/* 2ème Exemple avec class 'simple'
class Personne{
  public first_name : string;
  public last_name : string;
}

let professor : Personne = new Personne();
professor.first_name = "Lancelot";
professor.last_name = "Ckx";
*/

/* 3ème Exemple avec class 'simple' et private property */
interface IPersonne{
  First_name : string;
  Last_name : string;

  introduceYourself() : void;
}

class Personne implements IPersonne{
  private _first_name : string;
  private _last_name : string;

  //? GETTER & SETTER
  //? First_name
  public get First_name() : string{
    return this._first_name;
  }
  //* user n'auront pas accès à la propriété first_name
  private set First_name(value : string){
    this._first_name = value;
  }

  //? GETTER & SETTER
  //? Last_name
  public get Last_name() : string{
    return this._last_name;
  }
  private set Last_name(value : string){
    this._last_name = value;
  }

  //? CONSTRUCTOR
  constructor(first_name : string, last_name : string){
    this._first_name = first_name;
    this._last_name = last_name;
  }

  //? METHODS
  public introduceYourself() : void{
    console.log(`Aloha, je m'appelle ${this._first_name} ${this._last_name}`);
  }
}

class Employee extends Personne{
  public job : string;

  constructor(first_name : string, last_name : string, job : string){
    super(first_name, last_name);
    this.job = job;
  }

  public introduceYourself() : void{
    console.log(`Aloha, je m'appelle ${this.First_name} ${this.Last_name} et je suis ${this.job}`);
  }
}


/* MAIN PROGRAM */
let professor : Employee = new Employee("Lancelot", "Ckx", "Développeur");
// professor.introduceYourself();

let student : Personne = new Personne("Calynn", "Ckx");
// student.introduceYourself();

let groupOfPersons : IPersonne[] = [];
groupOfPersons.push(professor);
groupOfPersons.push(student);
groupOfPersons.push(
  {
    First_name : "Xena",
    Last_name : "Ckx",
    introduceYourself : () => console.log(`Aloha, je m'appelle Xena Ckx`)
  }
);
console.log(groupOfPersons);

groupOfPersons.forEach((person : IPersonne) => person.introduceYourself());