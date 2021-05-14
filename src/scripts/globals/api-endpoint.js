import config from './config';

const apiEndpoint = {
  LIST: `${config.webApi}/list`,
  DETAIL: (id) => `${config.webApi}/detail/${id}`,
};

export default apiEndpoint;
