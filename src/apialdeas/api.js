import axios from "axios";

export default {

    name: "api",

    axiosget(endpoint) {
        return new Promise((resolve, reject) => {
            axios
                .get(endpoint)
                .then((response) => {
                    console.log("valor del data axiosget : " + response.data);

                    resolve(response);
                    //return response.data;
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
        });
    }, //termina axiosget

  axiospost(endpoint, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(endpoint, params)
        .then((response) => {
          console.log("valor del data axiospost2 : " + response.data);

          resolve(response);
          //return response.data;
        })
        .catch((error) => {
            console.log(error);
            console.log("aqui esta el error ?");
          reject(error);
        });
    });
  }, //termina axiopost2

    axiosput(endpoint, params) {
        return new Promise((resolve, reject) => {
            axios
                .put(endpoint, params)
                .then((response) => {
                    console.log("valor del data axiospost2 : " + response.data);

                    resolve(response);
                    //return response.data;
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
        });
    }, //termina axiopost2

};