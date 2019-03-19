import axios from 'axios';

export default {
    getProducts (cb, title) {
      let url = "http://127.0.0.1:5000/api/product";
      if(title != '')
      {
        url = url+'/'+title
      }
      axios
      .get(url)
      .then(response => {
        cb(response.data.data);
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
    }
}

