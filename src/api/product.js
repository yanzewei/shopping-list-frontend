import axios from 'axios';

export default {
    getProducts (cb, title) {
      console.log(process.env.VUE_APP_HOSTNAME, process.env)

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
        console.log("There was an error:" + error.response);
      });
    }
}

