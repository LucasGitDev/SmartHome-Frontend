import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3333/api/button";

const instance = axios.create({
  baseURL: API_URL,
  headers: authHeader(),
});

class ButtonService {
  async getButtonStatus() {
    return instance.get("status").then((response) => {
      return response.data;
    });
  }

  setButtonStatus(status: number): any {
    return instance
      .post("", {
        value: status,
      })
      .then((response) => {
        return response.data;
      });
  }
}

export default new ButtonService();
