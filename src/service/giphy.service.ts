import axios from "axios";
const API_URL = "https://api.giphy.com/v1/gifs/";

export default class GiphyService {
  static async getTrendingGifs() {
    const url = `${API_URL}/trending?api_key=xrhlNmMdpunN0rQuGWkMnBkksLiecViV&limit=20&rating=G`;
    return await axios.get(url).then(response => response.data);
  }
}
