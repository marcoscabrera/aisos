export default {

   
    setearToken (token) {
      
         localStorage.setItem('token',token);

    },

    getToken(){
        return localStorage.token;
    },

    setUsuarioId(usuariodid) {

        sessionStorage.setItem('usuarioid',usuariodid);

    },

    getUsuarioId(){

        var v ;
        
        if (sessionStorage.usuarioid == null)
        {
             v =0;
        }else {
            v=  sessionStorage.usuarioid;
        }
        return v;
    }



}