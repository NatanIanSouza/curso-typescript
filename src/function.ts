// Conseguimos definir os tipos dos parâmetros e da função (desde que faça sentido).

// O TS é inteligente, ele identifica que o retorno será do tipo number (passe o mouse em cima do sum pra ver):
// const sum = (x: number, y:number) => {
//     return x + y;
// }

// Também podemos declaras explícitamente o tipo do retorno, podendo ser qualquer tipo, inclusive uma lista:
const sum = (x: number, y: number): number => {
  return x + y;
};

// Desde que faça sentido:
const sumString = (x: number, y: number): string => {
  return (x + y).toString();
};

// Com intersections:
// const sumString = (x: number, y:number): string | number => {
//     return (x + y).toString();
// }

const value = sum(2, 2);
const valueString = sumString(2, 2);

// Somente para funções, também temos outro tipo de retorno, que é o void
const log = (message: string): void => {
  console.log(message);
};

///////////////////////////
// Utilizando Interfacecs com funções
// Com Interfaces podemos definir quais parâmetros uma família de funções pode receber e quais valores ela pode retornar
interface MathFunc {
  // Aqui estamos dizendo que toda função que implementar essa Interface MathFunc precisa receber os number x e y, e também retornar um number.
  (x: number, y: number): number;
}

const sumInter: MathFunc = (x: number, y: number): number => {
  return x + y;
};

const sub: MathFunc = (x: number, y: number) => {
  return x - y;
};
