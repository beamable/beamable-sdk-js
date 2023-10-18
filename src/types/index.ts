export type Environment = 'development' | 'staging' | 'production';

export interface BeamableApiClientOptions {
  environment: Environment;
  cid: string;
  pid: string;
}

export interface MicroservicesOptions {
  realmId?: string;
  microserviceName: string;
  prefix?: string;
}

export interface BaseMicroservicesOptions extends MicroservicesOptions {
  clientId: string;
}
