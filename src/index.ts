import axios from 'axios';
import HttpClient from './network';
import { Microservices } from './services';
import { urls } from './config';
import { BeamableApiClientOptions, MicroservicesOptions } from './types';

class BeamableSDK {
  private _clientId: string = '';

  configure = async (options: BeamableApiClientOptions): Promise<void> => {
    const { environment, cid, pid } = options;
    this._clientId = cid;

    const axiosInstance = axios.create({
      baseURL: urls[environment],
      headers: {
        'X-DE-SCOPE': `${cid}.${pid}`,
      },
    });

    const {
      data: { access_token },
    } = await axiosInstance?.post('basic/auth/token', {
      grant_type: 'guest',
    });

    axiosInstance.defaults.headers.common.Authorization = `Bearer ${access_token}`;

    HttpClient.client = axiosInstance;
  };

  Microservices = (options: MicroservicesOptions) =>
    new Microservices({ ...options, clientId: this._clientId });
}

export default new BeamableSDK();
