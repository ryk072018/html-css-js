// https://github.com/lin-123/javascript
// js风格指南

// 对象方法
const atom = {
  value: 1,
  addValue(value) {
    return atom.value + value;
  },
};

// console.log(atom.addValue(7));

// 对象的浅拷贝
const original = { a: 1, b: 3 };
const copy = { ...original, c: 7, d: 13 };
// console.log(copy);

// 获取对象指定的几个属性
const { a, c, ...noA } = copy;
// console.log(noA);

// 向数组中添加值
const someStack = [321];
someStack.push(101);
// console.log(someStack);

// 对象浅拷贝
const items = [31, 42, 54, 64];
const copyItems = [...items, 991, 101];
// console.log(copyItems);

// 对象的解构赋值 获取和使用对象的属性值
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName}.${lastName}`;
}

function getFullName({ firstName, lastName }) {
  return `${firstName}.${lastName}`;
}

// 数组的解构赋值
const arr = [1, 2, 3, 4];
const [first, second] = arr;
// console.log(first, second);

const [firstT, , secondT] = arr;
// console.log(firstT, secondT);

// 使用字符串模板
function sayHi(name) {
  return `How are you,${name}?`;
}

// 函数表达式：const func = function(){};
// 函数声明：  function func(){};
// good
const x = function () {};
const x = function y() {};

const x = () => {};
const x = (y = (value) => {});

let test;
if (true) {
  test = (value) => {
    constle.log(value);
  };
}

//
