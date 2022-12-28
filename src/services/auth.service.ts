import axios from "axios";

const API_URL = "http://localhost:3333/api/login";

class AuthService {
  login(username: any, password: any) {
    return axios
      .post(API_URL, {
        user: username,
        pass: password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(login: any, name: any, password: any) {
    return axios.post("http://localhost:3333/api/user", {
      login,
      name,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user") || "{}");
  }
}

export default new AuthService();
