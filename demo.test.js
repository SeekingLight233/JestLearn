import { runCallBack, createInstance, getData } from './demo';
import axios from 'axios';
// 模拟调用axios
jest.mock('axios');

// mock函数 捕获函数的调用
test('测试 runCallBack', () => {
  const func = jest.fn();
  func.mockReturnValueOnce('result1').mockReturnValueOnce('result2');
  runCallBack(func);
  runCallBack(func);
  expect(func).toBeCalled();
  expect(func.mock.calls.length).toBe(2);
  expect(func.mock.calls[0]).toEqual(['abc']);
  expect(func).toBeCalledWith('abc');
  expect(func.mock.results[0].value).toBe('result1');
});

test('测试 createInstance', () => {
  const func = jest.fn();
  createInstance(func);
  console.log(func.mock);
});

test('测试 getData', async () => {
  // 模拟axios 接收到返回值
  axios.get.mockResolvedValue({ data: 'hello' });
  await getData().then((data) => {
    expect(data).toBe('hello');
  });
});
