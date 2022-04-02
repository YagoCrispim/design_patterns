// essa é uma das formas de usar prototype
// função construtora
function Person(lastName, age) {
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: "First name default do prototype",
  lastName: "Last name default do prototype",
  age: 20,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);

/**
  Nesse caso person não recebe o firstName e por isso vai buscar essa chave dentro do 
  prototype, no caso personPrototype, que tem essa chave 'firstName'

  Detalhe que neste caso, person1 não tem construtor. Perde-se esse método.
  Para add novamente caso seja necessário basta criar no prototype o método
e passar para ele o nome da própria função construtora. Ex:
    - Person.prototype.constructor = Person;
*/
const person1 = new Person("Bibibi bobobo", 25);
console.log(person1.fullName());

// "herança" de prototype
function subPerson(lastName, age) {
  Person.call(this, lastName, age);
  this.fromSubClass = 'Olá, sou a subclass'
}

subPerson.prototype = Object.create(Person.prototype);
subPerson.prototype.constructor = subPerson;

