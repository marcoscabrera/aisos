import axios from "axios";
import variablesLocales from '@/store/variablesLocales.js';
//import printJS from 'print-js'

export default {
    

    inicializarAxiosLS() {
        const token = variablesLocales.getToken();
        console.log("valor de token " + token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        axios.defaults.withCredentials = false;
      },

    bajarPdf2(url, store){

        this.inicializarAxiosLS();

        let predicado = "/api/v0/otradescargas";

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;

        let params = { url : url};


        return new Promise((resolve, reject) => {
            axios
              .post(endpoint, params)
              .then((response) => {
                console.log("valor del data apiBajarPdf.bajarPdf2 : " + response.data.pdf);
                
               // let v =  response.data.pdf;

              //  printJS({printable:v , type: 'pdf', base64: true,showModal : true});

                resolve(response);
                //return response.data;
              })
              .catch((error) => {
                  console.log(error.message);
                  reject(error);
              });

            });

    }
 

  /* bajarPDF(URL){

        axios({
            url: URL,
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {
             var fileURL = window.URL.createObjectURL(new Blob([response.data]));
             var fileLink = document.createElement('a');

             fileLink.href = fileURL;
             fileLink.setAttribute('download', 'file.pdf');
             document.body.appendChild(fileLink);

             fileLink.click();
        });

    }*/


}