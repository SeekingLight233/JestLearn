import Counter from './Counter';
let counter = null;

// 钩子函数
beforeAll(() => {});

// 每一次运行测试用例前都会执行
beforeEach(() => {
  counter = new Counter();
});
afterEach(() => {
  console.log('after each');
});

afterAll(() => {
  console.log('afterAll');
});

describe('测试加法', () => {
  test('测试addOne', () => {
    counter.addOne();
    expect(counter.number).toBe(1);
  });

  test('测试addTwo', () => {
    counter.addTwo();
    expect(counter.number).toBe(2);
  });
});

describe('测试减法', () => {
  test('测试minusOne', () => {
    counter.minusOne();
    expect(counter.number).toBe(-1);
  });

  test('测试minusTwo', () => {
    counter.minusTwo();
    expect(counter.number).toBe(-2);
  });
});
