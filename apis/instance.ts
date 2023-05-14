import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const apiStartTime = new Date().getTime();
instance.interceptors.request.use(
  (config) => {
    console.log(
      `📡  API REQUEST : ${config?.method ?? ''} ${config?.url ?? ''}`,
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    const apiEndTime = new Date().getTime();
    console.log(
      `💡 API RESPONSE : ${response.config?.method ?? ''} ${
        response.config?.url ?? ''
      } [${response.status}] [${Math.ceil(
        (apiEndTime - apiStartTime) / 100,
      )}ms]`,
    );
    return response.data;
  },
  async (err) => {
    if (err?.code === 'ERR_NETWORK' && typeof window !== 'undefined') {
      // 서버에서 대응하지 못한 에러가 날때의 대응입니다.
      // 추후 해당 에러에 대한 UI를 구현해서 값을 sync해주면 될 것 같습니다.
      return Promise.reject({
        resultCode: -9999,
        data: 'Network Error',
      });
    }

    const e = err?.response?.data ?? {};

    console.log(
      `🔴 API RESPONSE ERROR : ${err?.config?.method ?? ''} ${
        err?.config?.url ?? ''
      } [${err?.response?.status}]`,
      e,
    );

    return Promise.reject(e);
  },
);

export default instance;
