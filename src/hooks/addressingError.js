export default function addressingError(err) {

    console.log(err)
      
      if (err.response?.status === 401) {
        window.location = "#/login";
      } 
       else if (err.response?.status === 403) {
        window.location = "#/access";
      } else if (err.response?.status === 500) {
        window.location = "#/error";
      } else if (err.response?.status === 404) {
        window.location = "#/notfound";
      } else {
        window.location = "#/login";
      }
    }