import axios from "axios";
import Api from "../../Api";

const token = localStorage.getItem("token");
const api = new Api();
var { jwt } = {};

export default class AppSeccionCampoAdicionalService {
  async findAll() {
    if (token) {
      jwt = JSON.parse(token);
    }
    try {
      const response = await axios.get(
        api.baseUrl() + "/appseccioncampoadicional/all",
        {
          headers: { Authorization: `Bearer ${jwt.jwt}` },
        }
      );
      return response.data;
    } catch (err) {
      return err;
    }
  }
}
