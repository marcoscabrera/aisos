// --- INVALID - this is ignored by JSDOC ---
// API JS es el archivo base para las llamdas a la API
// a traves de la libreria AXIOS
// @param {number} input any number
// @returns {number} that number, plus one.
import axios from "axios";
import variablesLocales from '@/store/variablesLocales.js';

export default {

    name: "api",

    inicializarAxios(store) {
        const token = store.state.usuarios.usuarios_tokenUsuario;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        axios.defaults.withCredentials = true;
      },
      inicializarAxiosLS() {
        const token = variablesLocales.getToken();
        console.log("valor de token " + token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        axios.defaults.withCredentials = false;
      },
// --- INVALID - this is ignored by JSDOC ---
// Esta funcion realizar el GET a la API
// @param {string} el endpoint al cual sera la solicitud HTTP
    axiosget(endpoint) {
        this.inicializarAxiosLS();
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
    axiosget_sin_autorizacion(endpoint) {
    
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
    this.inicializarAxiosLS();
    return new Promise((resolve, reject) => {
      axios
        .post(endpoint, params)
        .then((response) => {
          console.log("valor del data axiospost2 : " + response.data);

          resolve(response);
          //return response.data;
        })
        .catch((error) => {
            console.log(error.message);
            

            if(error.message =='Request failed with status code 401'){

                this.$router.push('/login');
            }
          reject(error);
        });
    });
  }, //termina axiopost2

    axiosput(endpoint, params) {
        this.inicializarAxiosLS();
        return new Promise((resolve, reject) => {
            axios
                .put(endpoint, params)
                .then((response) => {
                    console.log("valor del data axiosput : " + response.data);

                    resolve(response);
                    //return response.data;
                })
                .catch((error) => {
                    console.log(error.data);
                    reject(error);
                });
        });
    }, //termina axiopost2

    axiosdelete(endpoint) {
      this.inicializarAxiosLS();
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