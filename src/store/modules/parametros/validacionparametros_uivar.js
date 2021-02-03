
//////uivars////////////////////
uivars_error_parametros_id:false, 

uivars_error_parametros_nombreParametro:false, 

uivars_error_parametros_descripcion:false, 

uivars_error_parametros_valor:false, 


////////////// actions /////////
 actions_uivars_error_parametros_id(context,valor){ 
     
     context.commit('mutation_uivars_error_parametros_id',valor); 
     },
 actions_uivars_error_parametros_nombreParametro(context,valor){ 
     
     context.commit('mutation_uivars_error_parametros_nombreParametro',valor); 
     },
 actions_uivars_error_parametros_descripcion(context,valor){ 
     
     context.commit('mutation_uivars_error_parametros_descripcion',valor); 
     },
 actions_uivars_error_parametros_valor(context,valor){ 
     
     context.commit('mutation_uivars_error_parametros_valor',valor); 
     },

///////////// mutations ////////
mutation_uivars_error_parametros_id(state,valor){  
        
       state.uivars_error_parametros_id = valor;  
       },
mutation_uivars_error_parametros_nombreParametro(state,valor){  
        
       state.uivars_error_parametros_nombreParametro = valor;  
       },
mutation_uivars_error_parametros_descripcion(state,valor){  
        
       state.uivars_error_parametros_descripcion = valor;  
       },
mutation_uivars_error_parametros_valor(state,valor){  
        
       state.uivars_error_parametros_valor = valor;  
       },

///////funciones de validacion ///


/* importar en el componente , antes del export defaiñt*/
import validacionReporteInicial from   "@/components/etapas/validaciones/validacionReporteInicial.js";

/* agregar en metodos del componente */
validacion_sePuedeCapturar(){

    this.errores = 0;  //debe de existir en data()

  const  { 
          
          parametros_id , 
 
 parametros_nombreParametro , 
 
 parametros_descripcion , 
 
 parametros_valor , 
 

     
         } = this.$store.state.parametros;

 let r =  false ;

  r = validacionReporteInicial.existeInformacionParaCapturar(parametros_id); 
   this.$store.dispatch('actions_uivars_error_parametros_id',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(parametros_nombreParametro); 
   this.$store.dispatch('actions_uivars_error_parametros_nombreParametro',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(parametros_descripcion); 
   this.$store.dispatch('actions_uivars_error_parametros_descripcion',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(parametros_valor); 
   this.$store.dispatch('actions_uivars_error_parametros_valor',r);   
   this.validarCaptura(r);




  return this.errores;

  },

  /* agregar validarCaptura */
  validarCaptura(valor){

    let suma=0 ;
    valor== false ? suma=0 : suma=1;

    this.errores = this.errores + suma;

  },
