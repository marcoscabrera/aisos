// --- INVALID - this is ignored by JSDOC ---
// API JS es el archivo base para las llamdas a la API
// a traves de la libreria AXIOS
// @param {number} input any number
// @returns {number} that number, plus one.
import axios from "axios";

export default {

    name: "api",
// --- INVALID - this is ignored by JSDOC ---
// Esta funcion realizar el GET a la API
// @param {string} el endpoint al cual sera la solicitud HTTP
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

    axiosdelete(endpoint) {
      return new Promise((resolve, reject) => {
          axios
              .delete(endpoint)
              .then((response) => {
                  console.log("valor del data axiosdelete : " + response.data);

                  resolve(response);
                  //return response.data;
              })
              .catch((error) => {
                  console.log(error);
                  reject(error);
              });
      });
  }, //termina axiosget
};