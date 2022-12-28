import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3333/api/led";

const instance = axios.create({
  baseURL: API_URL,
  headers: authHeader()
});

class LedService {
  async getLedStatus() {
    return instance.get("status").then((response) => {
      return response.data;
    });
  }

  setLedStatus(status: number): any {
    return instance
      .post("", {
        value: status,
      })
      .then((response) => {
        return response.data;
      });
  }
}

export default new LedService();
