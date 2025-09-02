// Type
// É basicamente um objeto, no qual conseguimos definir as propriedades e seus tipos.

type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string; // Deixando essa propriedade opcional com ?
  orders: Order[]; // Definindo uma lista do objeto Order
  // Podemos definir que uma propriedade será uma função:
  register(): string;
};

// Para criar um objeto desse User:
// Dica: CTRL + barra de espaço pra acessar as propriedades do objeto.
const user: User = {
  age: 2,
  email: "natan@gmail",
  firstName: "Natan",
  orders: [
    { productId: "1", price: 200 },
    { productId: "2", price: 500 },
  ],
  register() {
    return "text";
  },
};

// Tentando acessar uma propriedade opcional:
const myLog = (message: string) => {};

// myLog(user.password); // Assim dá erro porque fica como string | undefined. Então não posso passar algo que pode ser undefined pra função myLog que pede uma string
myLog(user.password!); // Utilizando o ! eu estou afirmando que eu tenho certeza que não será undefined.

// Unions
// Une objetos (Type)
type Author = {
  books: string[];
};

const author: Author & User = {
  age: 12,
  books: ["Pequeno principe", "jorge Jorge"],
  email: "autor@gmail.com",
  firstName: "autor",
  orders: [], // Pode ser uma lista vazia
  password: "123456",
  register() {
    return "texto do autor";
  },
};

///////////////////////////////
// Interfaces
// São bem parecidas com types
interface UserInter {
  readonly firstName: string; // Com o Interface podemos definir que essa propriedade será readonly, por exemplo.
  email: string;
  login(): string;
}

const interUser: UserInter = {
  firstName: "Natan",
  email: "natan@gmail.com",
  login() {
    return "logged";
  },
};

// interUser.firstName = 'Jorge'; // Se tentarmos alterar, dará erro porque é readonly

// Unions com Interface
interface AuthorInter {
  books: string[];
}

const interAuthor: AuthorInter & UserInter = {
  books: ["1", "2"],
  firstName: "Autinho",
  email: "auto@gmail.com",
  login() {
    return "YEs";
  },
};

// Uma coisa que o Type faz e o Interface não:
type Grade = number | string;
const grade: Grade = 1;
