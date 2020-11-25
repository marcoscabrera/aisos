import axios from "axios";

class UploadFilesService {

  upload(incidenteid, directorio, file, onUploadProgress,state) {
    
    let formData = new FormData();

    console.log(directorio);
    console.log(incidenteid);

    formData.append("file", file);
    formData.append("directorio",directorio);
    formData.append("incidenteId",incidenteid);

    console.log(formData);

    //endpoint
    let endpoint= state.urlServidor +'/api/v0/upload';

    return axios.post(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }

  getFiles(id,state) {
    //endpoint
    let endpoint= state.urlServidor +'/api/v0/files/' + id;

    console.log(" valor del endpoint  : " + endpoint);
    return axios.get(endpoint);
  }
}

export default new UploadFilesService();
