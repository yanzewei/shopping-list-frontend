import axios from 'axios';

export default {
    getProducts (cb, title) {
      let url = process.env.VUE_APP_HOSTNAME+"/api/product";
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
        console.log(error.response);
      });
    }
}

