import api from '@/apialdeas/api.js'

export default {

   hayUnUsuarioLogueado (ruta) {

    let usuarioLogueado = false; 

    this.$store.state.usuarios.usuarios_usuariologueado == 0 ?  usuarioLogueado = false : 
    usuarioLogueado = true ;

    usuarioLogueado== false ? this.$router.push('Login') : this.$router.push(ruta);

   // return usuarioLogueado;
    
 } ,

  loginUsuario(correo, pass, store){
   
   let predicado =`/api/v0/login/usuario/${correo}/pass/${pass}`;

   console.log("valor predicado : " + predicado );
   
   let apix = store.state.urlServidor;
   
   let endpoint = apix + predicado;

   return api.axiosget(endpoint);

  }



 

  

}