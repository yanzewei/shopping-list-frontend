import axios from 'axios'

export default {
    getShoppingCart(cb) {
        axios
        .get(process.env.VUE_APP_HOSTNAME+"/api/shoplist/1")
        .then(response => {
            cb(response.data.data);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    },

    getShoppingQuantity(cb){
        axios
        .get(process.env.VUE_APP_HOSTNAME+"/api/shopquantity/1")
        .then(response => {
            cb(response.data.data.quantity);
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    },

    updateShoppingCart(cart, cb) {
        axios
        .put(process.env.VUE_APP_HOSTNAME+"/api/shoplist", cart)
        .then(response => {
            cb(cart.nums)
        })
        .catch(error => {
            console.log("There was an error:" + error.response);
        });
    },
    
    removeShoppingCart(cart, cb) {
        axios
        .delete(process.env.VUE_APP_HOSTNAME+"/api/shoplist", { data: cart })
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
        .post(process.env.VUE_APP_HOSTNAME+"/api/shoplist", cart)
        .then(response => {
            cb(response.status)
        })
        .catch(error => {
            if(typeof(error.response)!='undefined')
            {
                cb(error.response.status)
                console.log(error.response)
            }
        });
    }
}