import { fetchData, fetchDataPromise, fetchDataError } from './fetchData';

// 回调异步测试
test('fetchData 返回结果为{success:true}', (done) => {
  fetchData((data) => {
    expect(data).toEqual({ success: true });
    done();
  });
});

// promise测试
test('fetchData 返回结果为{success:true}', () => {
  // 不要忘了return
  return fetchDataPromise().then((res) => {
    expect(res.data).toEqual({ success: true });
  });
});

// 另一种测试方法
test('fetchData 返回结果为{success:true}', async () => {
  const response = await fetchDataPromise();
  expect(response.data).toEqual({ success: true });
});

// error测试
test('fetchData 返回结果为404', () => {
  expect.assertions(1); // 确保expect的语法必须执行1个
  return fetchDataError().catch((e) => {
    expect(e.toString().indexOf('404') > -1).toBe(true);
  });
});
// error测试
test('fetchData 返回结果为404', async () => {
  await expect(fetchDataError()).rejects.toThrow();
});
