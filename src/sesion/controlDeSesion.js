import api from '@/apialdeas/api.js'
import variablesLocales from '@/store/variablesLocales.js';
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

   return api.axiosget_sin_autorizacion(endpoint);

  },
  tienePermisoParaAcceder(permiso, store){

    console.log("permiso :" + permiso);
    console.log("permiso del rol:" + store.state.usuarios.usuarios_usuariologueado_rol[permiso]);

    if (store.state.usuarios.usuarios_usuariologueado_rol[permiso]=="SI"){

       return true;
    }else {
      return false;
    }

  },


  cerrarSesion(store,router){

    store.dispatch('action_usuarios_usuariologueado',null);
    store.dispatch('action_usuarios_usuariologueado_rol',null);
    store.dispatch('actions_uuivars_puedevermenulateral',false);
    store.dispatch('actions_uivars_hayUnUsuarioLogueado',false);
    variablesLocales.setearToken('');
    variablesLocales.setUsuarioId('');
    
    router.push("/login");

 },



 

  

}