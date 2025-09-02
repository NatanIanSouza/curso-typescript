// Com o generics, temos uma forma de passar tipos como parâmetros.

// Para pedir o generic como parâmetro: (OBS: pode passar qualquer nome, não precisa ser T ou Type)
const returnValue = <T>(value: T): T => value; // Em arrow function

// Para passar o generic como parâmetro:
const message = returnValue<string>("Hello World");
const count = returnValue<number>(5);

// Em função "normal"
function getFirstValueFromArray<Type>(array: Type[]): Type {
  return array[0];
}

const getFirstValueFromStringArray = getFirstValueFromArray<string>([
  "1",
  "2",
  "3",
]);
const getFirstValueFromNumberArray = getFirstValueFromArray<number>([1, 2, 3]);

// Podemos passar quantos generics quisermos, exemplo:
const returnValue2 = <T, X, Y>(value: T, value2: X, value3: Y): Y => value3;
const message2 = returnValue2<string, boolean, number>("Hello World", false, 7);

/////////////////////////////////////////
// Promises com generics
const returnPromise = async (): Promise<string> => {
  return "yes";
};

// Classes com generics
class GenericNumber<T> {
  zeroValue: T;
  sumGeneric: (x: T, y: T) => T;

  constructor(zeroValue: T, sumGeneric: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.sumGeneric = sumGeneric;
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
  return x + y;
});
