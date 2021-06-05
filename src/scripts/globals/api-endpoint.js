import config from './config';

const apiEndpoint = {
  LIST: `${config.webApi}/list`,
  DETAIL: (id) => `${config.webApi}/detail/${id}`,
  SEARCH: (name) => `${config.webApi}/search?q=${name}`,
  REVIEW: `${config.webApi}/review`,
};

export default apiEndpoint;
