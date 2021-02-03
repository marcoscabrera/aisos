import validacionReporteInicial from   "@/components/etapas/validaciones/validacionReporteInicial.js";

export default {

    /*===== validacion  ======*/
/* agregar en metodos del componente */
errores : 0,

validacion_sePuedeCapturar(store){

    this.errores = 0;  //debe de existir en data()

  const  { 
          
         
 
 seguimiento_status , 

 seguimiento_plan_docto , 
 
 seguimiento_plan , 
 seguimiento_documentos_docto , 
 /*
 seguimiento_documentos , 
 
 seguimiento_notificaciondif , 
 
 seguimiento_notificacionautoridad , 
 
 seguimiento_notificacionpfn , 
 
 seguimiento_notificaciodenunciante , 
 
 seguimiento_actavaloracion , 
 
 seguimiento_planrecuperacion , 
 

 

 
 seguimiento_notificaciondif_docto , 
 
 seguimiento_notificacionautoridad_docto , 
 
 seguimiento_notificacionpfn_docto , 
 
 seguimiento_notificaciodenunciante_docto , 
 
 seguimiento_actavaloracion_docto , 
 
 seguimiento_protocolosos , 
 
 seguimiento_planrecuperacion_docto , */
 

     
         } = store.state.seguimiento;

 let r =  false ;

    console.log(" valor de this.errores en seguimiento  : " + this.errores);
 r = validacionReporteInicial.existeInformacionParaCapturar_y_mayor_a(seguimiento_status,20); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_status',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(seguimiento_plan); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_plan',r);   
   this.validarCaptura(r);
   r = validacionReporteInicial.existeInformacionParaCapturar_y_no_es_cero(seguimiento_plan_docto); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_plan_docto',r);   
   this.validarCaptura(r);
   r = validacionReporteInicial.existeInformacionParaCapturar_y_no_es_cero(seguimiento_documentos_docto); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_documentos_docto',r);   
   this.validarCaptura(r);
   /*
 r = validacionReporteInicial.existeInformacionParaCapturar(seguimiento_documentos); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_documentos',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(seguimiento_notificaciondif); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_notificaciondif',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(seguimiento_notificacionautoridad); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_notificacionautoridad',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(seguimiento_notificacionpfn); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_notificacionpfn',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(seguimiento_notificaciodenunciante); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_notificaciodenunciante',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(seguimiento_actavaloracion); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_actavaloracion',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(seguimiento_planrecuperacion); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_planrecuperacion',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(seguimiento_plan_docto); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_plan_docto',r);   
   this.validarCaptura(r);

 r = validacionReporteInicial.existeInformacionParaCapturar(seguimiento_notificaciondif_docto); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_notificaciondif_docto',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(seguimiento_notificacionautoridad_docto); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_notificacionautoridad_docto',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(seguimiento_notificacionpfn_docto); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_notificacionpfn_docto',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(seguimiento_notificaciodenunciante_docto); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_notificaciodenunciante_docto',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(seguimiento_actavaloracion_docto); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_actavaloracion_docto',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(seguimiento_protocolosos); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_protocolosos',r);   
   this.validarCaptura(r);
 r = validacionReporteInicial.existeInformacionParaCapturar(seguimiento_planrecuperacion_docto); 
   store.dispatch('actions_uivars_error_seguimiento_seguimiento_planrecuperacion_docto',r);   
   this.validarCaptura(r);*/


   console.log(" valor de this.errores en seguimiento despues de validar : " + this.errores);

  return this.errores;

  },

  /* agregar validarCaptura */
  validarCaptura(valor){

    let suma=0 ;
    valor== false ? suma=0 : suma=1;

    this.errores = this.errores + suma;

  },


  inicializar_captura_De_errores(store){


   // store.dispatch('actions_uivars_error_seguimiento_seguimiento_id',false);
     
              
     //   store.dispatch('actions_uivars_error_seguimiento_seguimiento_status',false);
        
        store.dispatch('actions_uivars_error_seguimiento_seguimiento_plan',false);
        
        store.dispatch('actions_uivars_error_seguimiento_seguimiento_documentos',false);
        
       store.dispatch('actions_uivars_error_seguimiento_seguimiento_notificaciondif',false);
        
       
    store.dispatch('actions_uivars_error_seguimiento_seguimiento_notificacionautoridad',false);
        
       
    store.dispatch('actions_uivars_error_seguimiento_seguimiento_notificacionpfn',false);
        
       
    store.dispatch('actions_uivars_error_seguimiento_seguimiento_notificaciodenunciante',false);
        
       
    store.dispatch('actions_uivars_error_seguimiento_seguimiento_actavaloracion',false);
        
           store.dispatch('actions_uivars_error_seguimiento_seguimiento_planrecuperacion',false);
        
       
    store.dispatch('actions_uivars_error_seguimiento_seguimiento_plan_docto',false);
        
       store.dispatch('actions_uivars_error_seguimiento_seguimiento_documentos_docto',false);
        
       
    store.dispatch('actions_uivars_error_seguimiento_seguimiento_notificaciondif_docto',false);
        
       
    store.dispatch('actions_uivars_error_seguimiento_seguimiento_notificacionautoridad_docto',false);
        
       
    store.dispatch('actions_uivars_error_seguimiento_seguimiento_notificacionpfn_docto',false);
        
       
    store.dispatch('actions_uivars_error_seguimiento_seguimiento_notificaciodenunciante_docto',false);
        
       
    store.dispatch('actions_uivars_error_seguimiento_seguimiento_actavaloracion_docto',false);
        
 
    store.dispatch('actions_uivars_error_seguimiento_seguimiento_protocolosos',false);
        

    store.dispatch('actions_uivars_error_seguimiento_seguimiento_planrecuperacion_docto',false);
        


  }

    

}