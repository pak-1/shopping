import axios from "axios";

export function request(config) {
  // 1.创建实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",

    // baseURL: "http://123.207.32.32:8000",
    // timeout: 5000,
  });

  // 2.1 请求拦截

  //2.2 响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      console.log(err);
    }
  );
  // 返回
  return instance(config);
}
