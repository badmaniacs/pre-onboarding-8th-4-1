/* Libraries */
import axios, { AxiosInstance } from "axios";

type CustomAxiosError = {
  result: boolean;
  message: string;
};

const configAxios: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

configAxios.interceptors.request.use(
  // eslint-disable-next-line arrow-body-style
  (config) => {
    // 요청 전에 수행할 코드
    return config;
  },
  (error) => {
    // 오류 응답을 보내기 전 수행할 코드
    const customError: CustomAxiosError = {
      result: false,
      message: error.response.data.message,
    };

    return Promise.reject(customError);
  },
);

configAxios.interceptors.response.use(
  // eslint-disable-next-line arrow-body-style
  (response) => {
    // 응답 전에 수행할 코드
    return response;
  },
  (error) => {
    // 오류 응답을 보내기 전 수행할 코드
    const customError: CustomAxiosError = {
      result: false,
      message: error.response.data.message,
    };

    return Promise.reject(customError);
  },
);

export default configAxios;
