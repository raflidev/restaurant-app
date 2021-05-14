import apiEndpoint from '../globals/api-endpoint';

class restoApi {
  static async restoApiList() {
    const res = await apiEndpoint.LIST;
    const resJson = res.json();
    return resJson.result;
  }

  static async restoApiDetail(id) {
    const res = await apiEndpoint.DETAIL(id);
    return res.json();
  }
}

export default restoApi;
