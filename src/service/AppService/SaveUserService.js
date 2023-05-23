

import jwt_decode from 'jwt-decode';
import axios from 'axios';
import qs from 'qs'
export const SaveUserService = () =>{


    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8081/cyberscope/api/v1/usuario/save',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYXlhbGV4MzVAZ21haWwuY29tIiwiaWF0IjoxNjg0ODIxODA5LCJleHAiOjE2ODQ5MDgyMDl9.SVDv88PfdVHZuqk-p4CSEPmk77eZUBU9OkS3QTDaRy8'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

}

