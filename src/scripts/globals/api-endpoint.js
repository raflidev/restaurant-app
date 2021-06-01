import config from './config';

const apiEndpoint = {
  LIST: `${config.webApi}/list`,
  DETAIL: (id) => `${config.webApi}/detail/${id}`,
  SEARCH: (name) => `${config.webApi}/search?q=${name}`,
};

export default apiEndpoint;
