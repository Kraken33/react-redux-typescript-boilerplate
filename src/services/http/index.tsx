import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from "axios";

const http: AxiosInstance = axios.create({
  baseURL: '/',
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Admin-Panel": true
  }
});

const nodeHttp: AxiosInstance = axios.create({
  baseURL: '/'
});

const requestInterceptor = (config: AxiosRequestConfig) => {
  return config;
};

http.interceptors.request.use(requestInterceptor);
nodeHttp.interceptors.request.use(requestInterceptor);

http.interceptors.response.use(
  (response: AxiosResponse<{ data: any }>): AxiosResponse => response,
  (error: AxiosError): never => {
    throw error;
  }
);

export { http, nodeHttp };
