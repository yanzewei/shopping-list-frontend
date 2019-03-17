import axios from 'axios'
import {chunk} from '../util';


export default {
    getProducts (cb, title) {
      let url = "http://127.0.0.1:5000/api/product";
      if(title != '')
      {
        url = url+'/'+title
      }
      axios
      //.get("http://localhost:3000/products")
      .get(url)
      .then(response => {
        let products = {}
        for(let index in response.data.data){
            products[index] = chunk(response.data.data[index], 3)
        }
        cb(products);
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
    }
}

