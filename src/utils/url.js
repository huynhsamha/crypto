import config from '../config';

export const getBaseUrl = () => process.env.PUBLIC_URL;

export const isProd = () => process.env.NODE_ENV === 'production';

export const getDomain = () => (isProd() ? `${config.domain}${getBaseUrl()}` : 'localhost:3000');
