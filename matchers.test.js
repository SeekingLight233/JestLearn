import { add, minus, multi } from './math';

test('测试减法', () => {
  // toBe匹配器: "==="
  expect(minus(3, 3)).toBe(0);
});

// test('测试乘法', () => {
//   expect(multi(3, 7)).toBe(21);
// });

test('toEqual用来测试对象内容相等', () => {
  const obj1 = { a: 10 };
  expect(obj1).toEqual({ a: 10 });
});
// PS: toBeNull 用来比较 null 对象,类似的还有toBeUndefined

// 布尔匹配器
test('toBeTruthy ', () => {
  const bool = true;
  expect(bool).toBeTruthy();
});

// not匹配器
test('not匹配器 ', () => {
  const bool = true;
  expect(bool).not.toBeFalsy();
});

// 数字相关的匹配器
test('toBeGreaterThan匹配器', () => {
  const count = 10;
  expect(count).toBeGreaterThan(9);
});

// js精度缺失! 可用来计算浮点数
test('toBeCloseTo', () => {
  const num1 = 0.1;
  const num2 = 0.2;
  expect(num1 + num2).toBeCloseTo(0.3);
});

//string相关的匹配器
test('toMatch', () => {
  const str = 'http://www.google.com';
  expect(str).toMatch('google');
});

//数组相关的匹配器
test('toContain', () => {
  const arr1 = [1, 2, 3, 4];
  // set也是支持的
  expect(arr1).toContain(3);
});

// 异常相关的匹配器

const throwNewErr = () => {
  throw new Error('error!');
};
test('toThrow', () => {
  expect(throwNewErr).toThrow('error!');
});

// 更多的匹配器请查阅 expect api
