import axios from "axios";
import Api from "../../Api";
const api = new Api();
//const token = localStorage.getItem("token");
//var { jwt } = {};
import addressingError from "../../hooks/addressingError";

export default class UserService {
 
      async save(data) {
      
        try {
          const response = await axios.post(
            'http://localhost:8081/cyberscope/api/v1/usuario/save',
            data,
            {
              headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYXlhbGV4MzVAZ21haWwuY29tIiwiaWF0IjoxNjg0ODIxODA5LCJleHAiOjE2ODQ5MDgyMDl9.SVDv88PfdVHZuqk-p4CSEPmk77eZUBU9OkS3QTDaRy8' },
            }
          );
          return response;
        } catch (err) {
          console.log(err);
        }
      }


      async findById(id) {
       // if (token) {
        //  jwt = JSON.parse(token);
        //}
        try {
          const response = await axios.get(
            api.baseUrl() + `/user/${id}`,
            {
           //   headers: { Authorization: `Bearer ${jwt.jwt}` },
            }
          );
          return response?.data;
        } catch (err) {
          addressingError(err);
        }
      }
      async findByEmail(email) {
        // if (token) {
         //  jwt = JSON.parse(token);
         //}
         console.log(email);
         try {
           const response = await axios.get(
             api.baseUrl() + `/user/email/${email}`,
             {
             // headers: { Authorization: `Bearer` },
             Cookie: 'JSESSIONID=71899E6F4325A5D17280809E3F52F879'
             }
           );
           return response;
         } catch (err) {
           addressingError(err);
         }
       }

       async findByAll() {
        // if (token) {
         //  jwt = JSON.parse(token);
         //}
         try {
           const response = await axios.get(
             api.baseUrl() + `/user/all`,
             {
            //   headers: { Authorization: `Bearer ${jwt.jwt}` },
             }
           );
           return response?.data;
         } catch (err) {
           addressingError(err);
         }
       }

    }