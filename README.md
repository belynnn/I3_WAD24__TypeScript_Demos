npm - manager

npx - executer

tsc - transcompilation

npm i (npm install) - pour récupérer le dossier node_modules après un clone repo

extends - héritage - La nouvelle classe est un enfant. Elle bénéficie des avantages liés à l'héritage. Elle possède toutes les propriétés et méthodes de son parent. Elle peut remplacer certaines d'entre elles et en implémenter de nouvelles, mais les éléments du parent sont déjà inclus.

implements - polymorphisme - La nouvelle classe peut être traitée comme la même « forme », mais elle n'est pas un enfant. Elle peut être passée à n'importe quelle méthode où Person est requise, même si elle a un parent différent de Person.

exemple :
```
class Person {
  name: string;
  age: number;
}
class Child extends Person {}
class Parent implements Person {}
```