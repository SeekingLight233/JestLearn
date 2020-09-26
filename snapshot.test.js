import { generateConfig, generateConfig2 } from './snapshot';

// 测试配置文件的时候可以使用快照
test('测试 generateConfig', () => {
  expect(generateConfig()).toMatchSnapshot({
    time: expect.any(Date),
  });
});

test('测试 generateConfig', () => {
  expect(generateConfig2()).toMatchSnapshot({
    time: expect.any(Date),
  });
});
