import HttpClient from '../network';
import { BaseMicroservicesOptions } from '../types';

export class Microservices {
  private readonly _realmId: string = '';
  private readonly _microserviceName: string = '';
  private readonly _prefix: string = '';
  private readonly _clientId: string = '';

  constructor(options: BaseMicroservicesOptions) {
    const { realmId, microserviceName, clientId, prefix = '' } = options;

    this._realmId = realmId;
    this._microserviceName = microserviceName;
    this._prefix = prefix;
    this._clientId = clientId;
  }

  invokeMethod = async (methodName: string, payload: any) => {
    try {
      return await HttpClient.request({
        method: 'post',
        url: `basic/${this._clientId}.${this._realmId}.${this._prefix}micro_${this._microserviceName}/${methodName}`,
        data: payload,
      });
    } catch (ex) {
      console.log(ex);
    }
  };
}
