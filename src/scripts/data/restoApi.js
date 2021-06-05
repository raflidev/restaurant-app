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

  static async restoApiReview(data) {
    const rawResponse = await fetch(apiEndpoint.REVIEW, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: data.id,
        name: data.name,
        review: data.review,
      }),
    });
    const content = await rawResponse.json();
    return content;
  }
}

export default restoApi;
