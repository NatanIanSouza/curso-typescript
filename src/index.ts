// No TS precisamos declarar o tipo da nossa variável:
// Nele, nós não podemos alterar o tipo da variável.

// Tipos básicos de variáveis:
let myAge: number = 55;
const firstName: string = "Natan";
const isValid: boolean = true;
// O tipo any aceita qualquer tipo e pode ter o seu tipo alterado também. Como uma Tipagem Dinâmica do JS:
let idk: any = 2;

idk = "12";
idk = false;

// O TS também associa um tipo a uma variável pelo seu valor, mesmo se não definirmos:
let myAge2 = 3;

// Também conseguimos usar a tipagem em listas, indicando que será uma lista somente daquele tipo:
const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, true];
const names: string[] = ["Natan", "Bárbara", "Coringa"];

// Exclusivos do TypeScript:

// Tupla
// É uma variável que usamos para quando queremos determinados valores em determinada ordem.
const person: [number, string] = [32, "Alék"];

// Lista de Tuplas
const people: [number, string][] = [
  [1, "Roberto"],
  [5, "Maitan"],
  [9, "Rodrigo"],
];

// Intersections
// Quando queremos que a variável possua um tipo ou outro.
let productId: string | number | boolean = "2";
productId = 2;

// Enum
// Para criar um valor que sempre será atribuído a outro valor.
enum Direction {
  Up = 1,
  Down = 2,
  Left = "Esquerda",
}

const direction = Direction.Left;

console.log(direction);

// Type Assertions
// Quando queremos alterar o tipo de uma variável. Quando queremos tratar uma variável que é do tipo x, como se fosse do tipo y.
const itemName: any = "Boné";

// Duas formas de fazer:
let itemId = itemName as string;
let itemId2 = <string>itemName;
