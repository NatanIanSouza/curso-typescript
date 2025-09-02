class Person {
  // No TS definimos os tipos que essa classe vai ter no seu this
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  // Também conseguimos tipar métodos:
  sayMyName(): string {
    return this.name;
  }
}

const personClass = new Person(1, "Natan", 20);

//////////////////////////////////////////
// Conseguimos utilizar Interfaces com classes:
interface IPerson {
  id: number;
  //   protected name: string; // Como dá erro por conta do protected, é melhor tirar da interface.
  //   private age: number; // Como dá erro por ser private, retiramos da interface.
  sayMyName(): string;
}

class PersonInter implements IPerson {
  // Também podemos utilizar modificadores nas classes:
  // Normalmente colocamos esses modificadores para que não possamos alterar os valores dos atributos, somente atribuir pelo construtor, quando for instanciar uma classe.
  readonly id: number; // Ler apenas
  protected name: string; // Pode ser acessada dentro da sua classe ou subclasse
  private age: number; // Pode ser acessada somente dentro da classe

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }
}

class Employee extends PersonInter {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }

  whoAmI() {
    // return this.age // Não conseguimos acessar o this.age aqui por ser private
    return this.name; // Mas conseguimos acessar o this.name por ser protected e isso aqui ser uma subclasse
  }
}

const personClassInter = new PersonInter(4, "Bá", 20);
// personClassInter.id = 3 // Dá erro por conta do readonly
// Não conseguimos acessar o personClassInter.name aqui pois é protected
// Não conseguimos acessar o personClassInter.age aqui pois é private

//////////////////////////
// Forma melhor de criar uma classe:
// É exatamente igual à classe PersonInter
class PersonRefact {
  constructor(
    readonly id: number,
    protected name: string,
    private age: number
  ) {}
}
