    
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export let httpClient: AxiosInstance | null = null;

class HttpClient {
  private _axios: AxiosInstance | null = null;

  set client(client: AxiosInstance) {
    this._axios = client;
  }

  request = (options: AxiosRequestConfig) => {
    return new Promise((res, rej) => {
      this._axios
        .request(options)
        .then((response: any) => res(response.data))
        .catch((ex: any) => rej(ex.response.data));
    });
  };
}

export default new HttpClient();
