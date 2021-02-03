<template>

<v-container name="concienciacontainer">
<h2></h2>
    <statusConciencia></statusConciencia>
    <componentecardclasificacionplan></componentecardclasificacionplan>
    <br />
    <componenteDocumentoConciencia></componenteDocumentoConciencia>

     <DocuementoConciencia
       :archivoId           ="this.$store.state.conciencia.conciencia_docto"
       :archivo             ="this.$store.state.conciencia.conciencia_docto" 
       :sihayarchivo        ="hayPlan"
       incidenteId         ="0"
       :objetoDatosArchivo  ="datosDelArchivo"
       :nombreDelArchivo    ="nombreDelArchivo"></DocuementoConciencia>
      <v-row>
        <v-col>
            <v-btn block color="red" dark @click="close">Cancelar </v-btn>
        </v-col>
        <v-col>
            <v-btn block color="green" :loading="loading" dark @click="save">
            Guardar
            </v-btn>
        </v-col>
      </v-row>
</v-container>

</template>

<script>
import eventBus from "@/eventBus.js";

import apiConciencia from '@/apialdeas/apiConciencia.js';
import statusConciencia from "@/components/componentesConciencia/statusConciencia.vue";
import componentecardclasificacionplan from "@/components/componentesConciencia/componente-card-clasificacion-plan.vue";
import DocuementoConciencia from "@/components/componentesConciencia/DocuementoConciencia.vue";
import validacionReporteInicial from   "@/components/etapas/validaciones/validacionReporteInicial.js";


export default {
  name: "agregarConcienciaComponente",



  components: {

    componentecardclasificacionplan,statusConciencia,DocuementoConciencia

  },

  mounted(){
   
   
   if (this.$store.state.conciencia.conciencia_id ==0 ){

      this.iniciaalizarVariables() ;
     
   }else {
     
     console.log("cargando el plan ");
     eventBus.$emit('cargarArchivoDocumentoConciencia');

   }

   


  },

  methods: {

    /* agregar en metodos del componente */
validacion_sePuedeCapturar(){

    this.errores = 0;  //debe de existir en data()

  const  { 
          
          
 
      conciencia_estatus , 
 
      conciencia_clasificacion , 

      conciencia_docto,
     
      conciencia_estatusplan,
 

     
         } = this.$store.state.conciencia;

 let r =  false ;



 r = validacionReporteInicial.existeInformacionParaCapturar(conciencia_estatus); 
   this.$store.dispatch('actions_uivars_error_conciencia_estatus',r);   
   this.validarCaptura(r);

 r = validacionReporteInicial.existeInformacionParaCapturar(conciencia_clasificacion); 
   this.$store.dispatch('actions_uivars_error_conciencia_clasificacion',r);   
   this.validarCaptura(r);

 r = validacionReporteInicial.existeInformacionParaCapturar(conciencia_docto); 
   this.$store.dispatch('actions_uivars_error_conciencia_docto',r);   
   this.validarCaptura(r);

 r = validacionReporteInicial.existeInformacionParaCapturar(conciencia_estatusplan); 
   this.$store.dispatch('actions_uivars_error_conciencia_estatusplan',r);   
   this.validarCaptura(r);

  return this.errores;

  },

  /* agregar validarCaptura */
  validarCaptura(valor){

    let suma=0 ;
    valor== false ? suma=0 : suma=1;

    this.errores = this.errores + suma;

  },

        asignarValor_id(event){   
          
        this.$store.dispatch('action_conciencia_id',event );  
             
     },
    asignarValor_estatus(event){   
          
        this.$store.dispatch('action_conciencia_estatus',event );  
             
     },
    asignarValor_clasificacion(event){   
          
        this.$store.dispatch('action_conciencia_clasificacion',event );  
             
     },
    asignarValor_activo(event){   
          
        this.$store.dispatch('action_conciencia_activo',event );  
             
     },
    asignarValor_tipo(event){   
          
        this.$store.dispatch('action_conciencia_tipo',event );  
             
     },





    iniciaalizarVariables2(response){

    this.$store.dispatch('action_conciencia_id', response.data[0]['id']);
    this.$store.dispatch('action_conciencia_estatus', response.data[0]['estatus']);
    this.$store.dispatch('action_conciencia_clasificacion', response.data[0]['clasificacion']);
    this.$store.dispatch('action_conciencia_activo', response.data[0]['activo']);
    this.$store.dispatch('action_conciencia_tipo', response.data[0]['tipo']);
    this.$store.dispatch('action_conciencia_docto', response.data[0]['docto']);
    this.$store.dispatch('action_conciencia_estatusplan', response.data[0]['estatusplan']);


    this.$store.dispatch('action_conciencia_activo', true);
      

       
},
    iniciaalizarVariables(){

  /*this.$store.dispatch('action_conciencia_id', response.data[0]['id']);
this.$store.dispatch('action_conciencia_estatus', response.data[0]['estatus']);
this.$store.dispatch('action_conciencia_clasificacion', response.data[0]['clasificacion']);
this.$store.dispatch('action_conciencia_activo', response.data[0]['activo']);
this.$store.dispatch('action_conciencia_tipo', response.data[0]['tipo']);


        this.$store.dispatch('action_conciencia_activo', true);*/
      

       
},

   inicializando_vuex_valores(){

      this.$store.dispatch('action_conciencia_id',0);
      this.$store.dispatch('action_conciencia_activo','');
     
      this.$store.dispatch('action_conciencia_estatus', '');
      this.$store.dispatch('action_conciencia_clasificacion', '');
      this.$store.dispatch('action_conciencia_activo', '');
      this.$store.dispatch('action_conciencia_tipo', '');
      this.$store.dispatch('action_conciencia_docto', '');
       this.$store.dispatch('action_conciencia_estatusplan', '');
    },

  
    close() {

      this.inicializando_vuex_valores();
      let t = "";

      this.$store.state.uivars.uivars_tipo_conciencia_o_prevencion =="Conciencia" ? t= 'c'
      : t='p';

      this.$router.push({ name : 'Conciencia' , params : { tipo : t }});
     },

    revisarErrores(){
      console.log("validando");
    },
    guardar_nuevoConciencia(){

          this.loading=true;
      
      let tipoagrabar = this.$store.state.uivars.uivars_tipo_conciencia_o_prevencion;
        
      let parametros = {
       
         id :  this.$store.state.conciencia.conciencia_id,
        estatus :  this.$store.state.conciencia.conciencia_estatus,
        clasificacion :  this.$store.state.conciencia.conciencia_clasificacion,
        docto :  this.$store.state.conciencia.conciencia_docto,
        estatusplan :this.$store.state.conciencia.conciencia_estatusplan,
        activo :  "1",
        tipo : tipoagrabar,


      } ;
    
    console.log(" cual es el valor del conciencia_activo : " +  this.$store.state.conciencia.conciencia_activo);
    let promesa ;

    this.ConcienciaId == 0 ? promesa = apiConciencia.nuevo__conciencia(parametros,this.$store) :
    promesa =apiConciencia.update__conciencia(parametros,this.$store) ;


     promesa
    .then( response => { 
      console.log(" valor de : ");
      console.log(response.data["id"]);
      this.ConcienciaId = response.data["id"];
      this.$store.dispatch("action_conciencia_id",this.ConcienciaId);
      console.log(" Valor de ConcienciaId : " +  this.ConcienciaId);

      this.loading =false;

      } )
    .catch( error => { console.log(JSON.stringify(error.data))});

     this.loading= false;


 

    },// termina metodo 


    save() {
      
      
      this.validacion_sePuedeCapturar();
      
      this.errores>0 ? this.revisarErrores() : this.guardar_nuevoConciencia();
   
  },
  },
  data() {
    return {
      errores : false,
      tipoAMostrar : '',
      ConcienciaId  : '0',
      loading: false,
      itemsOpciones:["SI","NO"],
      emailRules: [ 
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail debe de ser valido'
      ]

    };
  },
};
</script>

<style scoped>
</style>