import { Environment } from '/types';

const API_URL = 'https://api.beamable.com';
const DEV_API_URL = 'https://dev.api.beamable.com';
const STAGING_API_URL = 'https://staging.api.beamable.com';

export const urls: Record<Environment, string> = {
  development: DEV_API_URL,
  staging: STAGING_API_URL,
  production: API_URL,
};
