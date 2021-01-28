<template>

<v-container name="concienciacontainer">
<h2></h2>
    <statusConciencia></statusConciencia>
    <componentecardclasificacionplan></componentecardclasificacionplan>
    <br />
    <componenteDocumentoConciencia></componenteDocumentoConciencia>
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
<!--  <v-card>
    <v-card-title>
      <span class="headline"> Nuevo Conciencia </span>
    </v-card-title>

    <v-card-text>
      <v-container>

         <v-row> 
            <v-col> 
             <v-text-field 
             label='id' 
             value='id' 
             filled 
             dense 
             readOnly> 
  
             </v-text-field> 
            </v-col> 
            <v-col> 
              <v-text-field 
               :value='this.$store.state.conciencia.conciencia_id' 
                placeholder='id' 
                label='id' 
                filled 
                dense 
                @change='asignarValor_id($event)'> 
  
              </v-text-field> 
            </v-col> 
          </v-row>
<v-row> 
            <v-col> 
             <v-text-field 
             label='estatus' 
             value='estatus' 
             filled 
             dense 
             readOnly> 
  
             </v-text-field> 
            </v-col> 
            <v-col> 
              <v-text-field 
               :value='this.$store.state.conciencia.conciencia_estatus' 
                placeholder='estatus' 
                label='estatus' 
                filled 
                dense 
                @change='asignarValor_estatus($event)'> 
  
              </v-text-field> 
            </v-col> 
          </v-row>
<v-row> 
            <v-col> 
             <v-text-field 
             label='clasificacion' 
             value='clasificacion' 
             filled 
             dense 
             readOnly> 
  
             </v-text-field> 
            </v-col> 
            <v-col> 
              <v-text-field 
               :value='this.$store.state.conciencia.conciencia_clasificacion' 
                placeholder='clasificacion' 
                label='clasificacion' 
                filled 
                dense 
                @change='asignarValor_clasificacion($event)'> 
  
              </v-text-field> 
            </v-col> 
          </v-row>
<v-row> 
            <v-col> 
             <v-text-field 
             label='activo' 
             value='activo' 
             filled 
             dense 
             readOnly> 
  
             </v-text-field> 
            </v-col> 
            <v-col> 
              <v-text-field 
               :value='this.$store.state.conciencia.conciencia_activo' 
                placeholder='activo' 
                label='activo' 
                filled 
                dense 
                @change='asignarValor_activo($event)'> 
  
              </v-text-field> 
            </v-col> 
          </v-row>
<v-row> 
            <v-col> 
             <v-text-field 
             label='tipo' 
             value='tipo' 
             filled 
             dense 
             readOnly> 
  
             </v-text-field> 
            </v-col> 
            <v-col> 
              <v-text-field 
               :value='this.$store.state.conciencia.conciencia_tipo' 
                placeholder='tipo' 
                label='tipo' 
                filled 
                dense 
                @change='asignarValor_tipo($event)'> 
  
              </v-text-field> 
            </v-col> 
          </v-row>




        <v-row>
            <v-col>
                <v-switch
                  :value="this.$store.state.conciencia.conciencia_activo"
                  class="mx-2"
                  label="Activo "
                
                  @change="asignarValorInput($event)"
                ></v-switch>
            </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
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
    </v-card-actions>
  </v-card> -->
</template>

<script>

import apiConciencia from '@/apialdeas/apiConciencia.js';
import statusConciencia from "@/components/componentesConciencia/statusConciencia.vue";
import ComponenteDocumentoConciencia from "@/components/componentesConciencia/componenteDocumentoConciencia.vue";
import componentecardclasificacionplan from "@/components/componentesConciencia/componente-card-clasificacion-plan.vue";


export default {
  name: "agregarConcienciaComponente",



  components: {

    componentecardclasificacionplan,statusConciencia,ComponenteDocumentoConciencia

  },

  mounted(){
   
   
   if (this.$store.state.conciencia.conciencia_id ==0 ){
      this.iniciaalizarVariables() 
   }

   


  },

  methods: {

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
    },

  
    close() {

      this.inicializando_vuex_valores();
      this.$router.push("/conciencia")
     },
    save() {

      this.loading=true;
      
      let tipoagrabar = this.$store.state.uivars.uivars_tipo_conciencia_o_prevencion;
        
      let parametros = {
       
         id :  this.$store.state.conciencia.conciencia_id,
        estatus :  this.$store.state.conciencia.conciencia_estatus,
        clasificacion :  this.$store.state.conciencia.conciencia_clasificacion,
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
      } )
    .catch( error => { console.log(JSON.stringify(error.data))});

     this.loading= false;


    },
  },

  data() {
    return {
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