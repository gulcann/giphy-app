import axios from "axios";
const API_URL = "https://api.giphy.com/v1/gifs";

export default class GiphyService {
  static async getTrendingGifs() {
    const url = `${API_URL}/trending?api_key=xrhlNmMdpunN0rQuGWkMnBkksLiecViV&limit=20&rating=G`;
    let result = await axios
      .get(url)
      .then(response => response.data)
      .catch(error => {
        console.log(error);
      });
    return result;
  }
  static async getSearchGiphies(searchTerm: string) {
    let url = `${API_URL}/search?api_key=xrhlNmMdpunN0rQuGWkMnBkksLiecViV&q=${searchTerm}&limit=25&offset=0&rating=G&lang=en`;
    let result = await axios
      .get(url)
      .then(response => response.data)
      .catch(error => {
        console.log(error);
      });
    return result;
  }
}
