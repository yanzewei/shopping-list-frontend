import axios from 'axios'

export default {
    getShoppingCart(cb) {
        axios
        .get("http://127.0.0.1:5000/api/shoplist/1")
        .then(response => {
            cb(response.data.data);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    },

    updateShoppingCart(cart, cb) {
        console.log(cart)
        axios
        .put("http://127.0.0.1:5000/api/shoplist", cart)
        .then(response => {
            console.log(response)
            cb(cart.nums)
        })
        .catch(error => {
            console.log("There was an error:" + error.response);
        });
    },
    
    removeShoppingCart(cart, cb) {
        console.log(cart)
        axios
        .delete("http://127.0.0.1:5000/api/shoplist", { data: cart })
        .then(response => {
            console.log(response)
            cb()
        })
        .catch(error => {
            console.log("There was an error:" + error.response);
        });
    },
    
    addShoppingCart(cart, cb) {
        console.log(cart)
        axios
        .post("http://127.0.0.1:5000/api/shoplist", cart)
        .then(response => {
            console.log(response)
            cb(cart.nums)
        })
        .catch(error => {
            console.log("There was an error:" + error.response);
        });
    }
}