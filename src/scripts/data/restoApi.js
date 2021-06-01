import apiEndpoint from '../globals/api-endpoint';

class restoApi {
  static async restoApiList() {
    const res = await fetch(apiEndpoint.LIST);
    const resJson = await res.json();
    return resJson.restaurants;
  }

  static async restoApiDetail(id) {
    const res = await fetch(apiEndpoint.DETAIL(id));
    const resJson = await res.json();
    return resJson.restaurant;
  }

  static async restoApiSearch(name) {
    const res = await fetch(apiEndpoint.SEARCH(name));
    const resJson = await res.json();
    return resJson.restaurants;
  }
}

export default restoApi;
