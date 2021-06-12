
//////uivars////////////////////
uivars_error_doctosapoyo_id:false, 

uivars_error_doctosapoyo_nombredocto:false, 

uivars_error_doctosapoyo_incidenteid:false, 

uivars_error_doctosapoyo_descripcion:false, 

uivars_error_doctosapoyo_link:false, 

uivars_error_doctosapoyo_categoria:false, 

uivars_error_doctosapoyo_activo:false, 


////////////// actions /////////
 actions_uivars_error_doctosapoyo_id(context,valor){ 
     
     context.commit('mutation_uivars_error_doctosapoyo_id',valor); 
     },
 actions_uivars_error_doctosapoyo_nombredocto(context,valor){ 
     
     context.commit('mutation_uivars_error_doctosapoyo_nombredocto',valor); 
     },
 actions_uivars_error_doctosapoyo_incidenteid(context,valor){ 
     
     context.commit('mutation_uivars_error_doctosapoyo_incidenteid',valor); 
     },
 actions_uivars_error_doctosapoyo_descripcion(context,valor){ 
     
     context.commit('mutation_uivars_error_doctosapoyo_descripcion',valor); 
     },
 actions_uivars_error_doctosapoyo_link(context,valor){ 
     
     context.commit('mutation_uivars_error_doctosapoyo_link',valor); 
     },
 actions_uivars_error_doctosapoyo_categoria(context,valor){ 
     
     context.commit('mutation_uivars_error_doctosapoyo_categoria',valor); 
     },
 actions_uivars_error_doctosapoyo_activo(context,valor){ 
     
     context.commit('mutation_uivars_error_doctosapoyo_activo',valor); 
     },

///////////// mutations ////////
mutation_uivars_error_doctosapoyo_id(state,valor){  
        
       state.uivars_error_doctosapoyo_id = valor;  
       },
mutation_uivars_error_doctosapoyo_nombredocto(state,valor){  
        
       state.uivars_error_doctosapoyo_nombredocto = valor;  
       },
mutation_uivars_error_doctosapoyo_incidenteid(state,valor){  
        
       state.uivars_error_doctosapoyo_incidenteid = valor;  
       },
mutation_uivars_error_doctosapoyo_descripcion(state,valor){  
        
       state.uivars_error_doctosapoyo_descripcion = valor;  
       },
mutation_uivars_error_doctosapoyo_link(state,valor){  
        
       state.uivars_error_doctosapoyo_link = valor;  
       },
mutation_uivars_error_doctosapoyo_categoria(state,valor){  
        
       state.uivars_error_doctosapoyo_categoria = valor;  
       },
mutation_uivars_error_doctosapoyo_activo(state,valor){  
        
       state.uivars_error_doctosapoyo_activo = valor;  
       },

///////funciones de validacion ///


/* importar en el componente , antes del export defaiñt*/
import validacionReporteInicial from   "@/components/etapas/validaciones/validacionReporteInicial.js";

/* agregar en metodos del componente */
validacion_sePuedeCapturar(){

    this.errores = 0;  //debe de existir en data()

  const  { 
          
          doctosapoyo_id , 
 
 doctosapoyo_nombredocto , 
 
 doctosapoyo_incidenteid , 
 
 doctosapoyo_descripcion , 
 
 doctosapoyo_link , 
 
 doctosapoyo_categoria , 
 
 doctosapoyo_activo , 
 

     
         } = this.$store.state.doctosapoyo;

 let r =  false ;

  r = validacionReporteInicial.existeInformacionParaCapturar(doctosapoyo_id); 
   this.$store.dispatch('actions_uivars_error_doctosapoyo_id',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(doctosapoyo_nombredocto); 
   this.$store.dispatch('actions_uivars_error_doctosapoyo_nombredocto',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(doctosapoyo_incidenteid); 
   this.$store.dispatch('actions_uivars_error_doctosapoyo_incidenteid',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(doctosapoyo_descripcion); 
   this.$store.dispatch('actions_uivars_error_doctosapoyo_descripcion',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(doctosapoyo_link); 
   this.$store.dispatch('actions_uivars_error_doctosapoyo_link',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(doctosapoyo_categoria); 
   this.$store.dispatch('actions_uivars_error_doctosapoyo_categoria',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(doctosapoyo_activo); 
   this.$store.dispatch('actions_uivars_error_doctosapoyo_activo',r);   
   this.validarCaptura(r);




  return this.errores;

  },

  /* agregar validarCaptura */
  validarCaptura(valor){

    let suma=0 ;
    valor== false ? suma=0 : suma=1;

    this.errores = this.errores + suma;

  },

//////uivars////////////////////
uivars_error_doctosapoyo_id:false, 

uivars_error_doctosapoyo_nombredocto:false, 

uivars_error_doctosapoyo_incidenteid:false, 

uivars_error_doctosapoyo_descripcion:false, 

uivars_error_doctosapoyo_link:false, 

uivars_error_doctosapoyo_categoria:false, 

uivars_error_doctosapoyo_activo:false, 


////////////// actions /////////
 actions_uivars_error_doctosapoyo_id(context,valor){ 
     
     context.commit('mutation_uivars_error_doctosapoyo_id',valor); 
     },
 actions_uivars_error_doctosapoyo_nombredocto(context,valor){ 
     
     context.commit('mutation_uivars_error_doctosapoyo_nombredocto',valor); 
     },
 actions_uivars_error_doctosapoyo_incidenteid(context,valor){ 
     
     context.commit('mutation_uivars_error_doctosapoyo_incidenteid',valor); 
     },
 actions_uivars_error_doctosapoyo_descripcion(context,valor){ 
     
     context.commit('mutation_uivars_error_doctosapoyo_descripcion',valor); 
     },
 actions_uivars_error_doctosapoyo_link(context,valor){ 
     
     context.commit('mutation_uivars_error_doctosapoyo_link',valor); 
     },
 actions_uivars_error_doctosapoyo_categoria(context,valor){ 
     
     context.commit('mutation_uivars_error_doctosapoyo_categoria',valor); 
     },
 actions_uivars_error_doctosapoyo_activo(context,valor){ 
     
     context.commit('mutation_uivars_error_doctosapoyo_activo',valor); 
     },

///////////// mutations ////////
mutation_uivars_error_doctosapoyo_id(state,valor){  
        
       state.uivars_error_doctosapoyo_id = valor;  
       },
mutation_uivars_error_doctosapoyo_nombredocto(state,valor){  
        
       state.uivars_error_doctosapoyo_nombredocto = valor;  
       },
mutation_uivars_error_doctosapoyo_incidenteid(state,valor){  
        
       state.uivars_error_doctosapoyo_incidenteid = valor;  
       },
mutation_uivars_error_doctosapoyo_descripcion(state,valor){  
        
       state.uivars_error_doctosapoyo_descripcion = valor;  
       },
mutation_uivars_error_doctosapoyo_link(state,valor){  
        
       state.uivars_error_doctosapoyo_link = valor;  
       },
mutation_uivars_error_doctosapoyo_categoria(state,valor){  
        
       state.uivars_error_doctosapoyo_categoria = valor;  
       },
mutation_uivars_error_doctosapoyo_activo(state,valor){  
        
       state.uivars_error_doctosapoyo_activo = valor;  
       },

///////funciones de validacion ///


/* importar en el componente , antes del export defaiñt*/
import validacionReporteInicial from   "@/components/etapas/validaciones/validacionReporteInicial.js";

/* agregar en metodos del componente */
validacion_sePuedeCapturar(){

    this.errores = 0;  //debe de existir en data()

  const  { 
          
          doctosapoyo_id , 
 
 doctosapoyo_nombredocto , 
 
 doctosapoyo_incidenteid , 
 
 doctosapoyo_descripcion , 
 
 doctosapoyo_link , 
 
 doctosapoyo_categoria , 
 
 doctosapoyo_activo , 
 

     
         } = this.$store.state.doctosapoyo;

 let r =  false ;

  r = validacionReporteInicial.existeInformacionParaCapturar(doctosapoyo_id); 
   this.$store.dispatch('actions_uivars_error_doctosapoyo_id',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(doctosapoyo_nombredocto); 
   this.$store.dispatch('actions_uivars_error_doctosapoyo_nombredocto',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(doctosapoyo_incidenteid); 
   this.$store.dispatch('actions_uivars_error_doctosapoyo_incidenteid',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(doctosapoyo_descripcion); 
   this.$store.dispatch('actions_uivars_error_doctosapoyo_descripcion',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(doctosapoyo_link); 
   this.$store.dispatch('actions_uivars_error_doctosapoyo_link',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(doctosapoyo_categoria); 
   this.$store.dispatch('actions_uivars_error_doctosapoyo_categoria',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(doctosapoyo_activo); 
   this.$store.dispatch('actions_uivars_error_doctosapoyo_activo',r);   
   this.validarCaptura(r);




  return this.errores;

  },

  /* agregar validarCaptura */
  validarCaptura(valor){

    let suma=0 ;
    valor== false ? suma=0 : suma=1;

    this.errores = this.errores + suma;

  },
