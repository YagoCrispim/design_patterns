// essa é uma forma de usar prototype
const personPrototype = {
  firstName: "Fulano",
  lastName: "de Tal",
  age: 20,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// se parece com herança, mas é delegação
const anotherPerson = Object.create(personPrototype);

// no objeto abaixo(anotherPerson) não existe nada e por isso o retorno do console será {}
console.log(anotherPerson);

// esse objeto não tem a propriedade firstName, mas como ele tem um protótipo o js irá ate lá
// verificar se existe essa propriedade. Nesse caso ela existe e é "Fulano"
console.log(anotherPerson.firstName);

