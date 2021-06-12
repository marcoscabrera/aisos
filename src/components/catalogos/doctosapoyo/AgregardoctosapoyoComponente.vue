<template>
  <v-card>
    <v-card-title>
      <span class="headline"> Nuevo Documento de Apoyo </span>
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
               :value='this.$store.state.doctosapoyo.doctosapoyo_id' 
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
             label='nombredocto' 
             value='nombredocto' 
             filled 
             dense 
             readOnly> 
  
             </v-text-field> 
            </v-col> 
            <v-col> 
              <v-text-field 
               :value='this.$store.state.doctosapoyo.doctosapoyo_nombredocto' 
                placeholder='nombredocto' 
                label='nombredocto' 
                filled 
                dense 
                @change='asignarValor_nombredocto($event)'> 
  
              </v-text-field> 
            </v-col> 
          </v-row>
          <!--
          <v-row> 
            <v-col> 
             <v-text-field 
             label='incidenteid' 
             value='incidenteid' 
             filled 
             dense 
             readOnly> 
  
             </v-text-field> 
            </v-col> 
            <v-col> 
              <v-text-field 
               :value='this.$store.state.doctosapoyo.doctosapoyo_incidenteid' 
                placeholder='incidenteid' 
                label='incidenteid' 
                filled 
                dense 
                @change='asignarValor_incidenteid($event)'> 
  
              </v-text-field> 
            </v-col> 
          </v-row> -->

          <v-row> 
            <v-col> 
             <v-text-field 
             label='descripcion' 
             value='descripcion' 
             filled 
             dense 
             readOnly> 
  
             </v-text-field> 
            </v-col> 
            <v-col> 
              <v-text-field 
               :value='this.$store.state.doctosapoyo.doctosapoyo_descripcion' 
                placeholder='descripcion' 
                label='descripcion' 
                filled 
                dense 
                @change='asignarValor_descripcion($event)'> 
  
              </v-text-field> 
            </v-col> 
          </v-row>
<v-row> 
            <v-col> 
             <v-text-field 
             label='link' 
             value='link' 
             filled 
             dense 
             readOnly> 
  
             </v-text-field> 
            </v-col> 
            <v-col> 
              <v-text-field 
               :value='this.$store.state.doctosapoyo.doctosapoyo_link' 
                placeholder='link' 
                label='link' 
                filled 
                dense 
                @change='asignarValor_link($event)'> 
  
              </v-text-field> 
            </v-col> 
          </v-row>
<v-row> 
            <v-col> 
             <v-text-field 
             label='categoria' 
             value='categoria' 
             filled 
             dense 
             readOnly> 
  
             </v-text-field> 
            </v-col> 
            <v-col> 
              <v-text-field 
               :value='this.$store.state.doctosapoyo.doctosapoyo_categoria' 
                placeholder='categoria' 
                label='categoria' 
                filled 
                dense 
                @change='asignarValor_categoria($event)'> 
  
              </v-text-field> 
            </v-col> 
          </v-row>
          <!--
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
               :value='this.$store.state.doctosapoyo.doctosapoyo_activo' 
                placeholder='activo' 
                label='activo' 
                filled 
                dense 
                @change='asignarValor_activo($event)'> 
  
              </v-text-field> 
            </v-col> 
          </v-row>
          -->




     <!--   <v-row>
            <v-col>
                <v-switch
                  :value="this.$store.state.doctosapoyo.doctosapoyo_activo"
                  :v-model ="activo_o_noactivo"
                    class="mx-2"
                  label="Activo"
                 @change="asignarValor_activo($event)"
                ></v-switch>
            </v-col>
        </v-row>
        -->


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
  </v-card>
</template>

<script>

import apidoctosapoyo from '@/apialdeas/apiDoctosApoyo.js';


export default {
  name: "agregardoctosapoyoComponente",

  components: {

  },

  computed : {

       
       activo_o_noactivo(){

             
             if(this.$store.state.doctosapoyo.doctosapoyo_activo == 1){

               return true
             }else {
               return false;
             }





       }
   

  },


  mounted(){
   
   
   if (this.$store.state.doctosapoyo.doctosapoyo_id ==0 ){
      let response = null;
      this.iniciaalizarVariables(response) ;
   }
 


  
  //this.cargarProgramas();
  


  },

  methods: {

        asignarValor_id(event){   
          
        this.$store.dispatch('action_doctosapoyo_id',event );  
             
     },
    asignarValor_nombredocto(event){   
          
        this.$store.dispatch('action_doctosapoyo_nombredocto',event );  
             
     },
    asignarValor_incidenteid(event){   
          
        this.$store.dispatch('action_doctosapoyo_incidenteid',event );  
             
     },
    asignarValor_descripcion(event){   
          
        this.$store.dispatch('action_doctosapoyo_descripcion',event );  
             
     },
    asignarValor_link(event){   
          
        this.$store.dispatch('action_doctosapoyo_link',event );  
             
     },
    asignarValor_categoria(event){   
          
        this.$store.dispatch('action_doctosapoyo_categoria',event );  
             
     },
    asignarValor_activo(event){   
          
        this.$store.dispatch('action_doctosapoyo_activo',event );  
             
     },



    iniciaalizarVariables(response){


        if (response != null){

         this.$store.dispatch('action_doctosapoyo_id', response.data[0]['id']);
        this.$store.dispatch('action_doctosapoyo_nombredocto', response.data[0]['nombredocto']);
        this.$store.dispatch('action_doctosapoyo_incidenteid', response.data[0]['incidenteid']);
        this.$store.dispatch('action_doctosapoyo_descripcion', response.data[0]['descripcion']);
        this.$store.dispatch('action_doctosapoyo_link', response.data[0]['link']);
        this.$store.dispatch('action_doctosapoyo_categoria', response.data[0]['categoria']);
        this.$store.dispatch('action_doctosapoyo_activo', response.data[0]['activo']);


              //  this.$store.dispatch('action_doctosapoyo_activo', true);
        }else
        {

            this.$store.dispatch('action_doctosapoyo_id',0);
            this.$store.dispatch('action_doctosapoyo_nombredocto',0);
            this.$store.dispatch('action_doctosapoyo_incidenteid',0);
            this.$store.dispatch('action_doctosapoyo_descripcion',0);
            this.$store.dispatch('action_doctosapoyo_link', 0);
            this.$store.dispatch('action_doctosapoyo_categoria', 0);
            this.$store.dispatch('action_doctosapoyo_activo', 0);
            this.$store.dispatch('action_doctosapoyo_activo', false);

        }
      

       
},

    close() {

      this.$router.push({ name : 'DoctosApoyo'});
     },
    save() {

      this.loading=true;

        
      let parametros = {
       
         id            :  this.$store.state.doctosapoyo.doctosapoyo_id,
        operacion      : 'update',
        nombredocto    :  this.$store.state.doctosapoyo.doctosapoyo_nombredocto,
        incidenteid    :  this.$store.state.doctosapoyo.doctosapoyo_incidenteid,
        descripcion    :  this.$store.state.doctosapoyo.doctosapoyo_descripcion,
        link           :  this.$store.state.doctosapoyo.doctosapoyo_link,
        categoria      :  this.$store.state.doctosapoyo.doctosapoyo_categoria,
        activo         :  this.$store.state.doctosapoyo.doctosapoyo_activo,


      } ;
    
    console.log(" cual es el valor del doctosapoyo_activo : " +  this.$store.state.doctosapoyo.doctosapoyo_activo);
    let promesa ;

    console.log("valor de id " + this.$store.state.doctosapoyo.doctosapoyo_id);
     this.doctosapoyoId = this.$store.state.doctosapoyo.doctosapoyo_id;

    this.doctosapoyoId == 0 ? promesa = apidoctosapoyo.nuevo__doctosapoyo(parametros,this.$store) :
    promesa =apidoctosapoyo.update__doctosapoyo(parametros,this.$store) ;


     promesa
    .then( response => { 
      console.log(" valor de : ");
      console.log(response.data["id"]);
      this.doctosapoyoId = response.data["id"];
      this.$store.dispatch("action_doctosapoyo_id",this.doctosapoyoId);
      console.log(" Valor de doctosapoyoId : " +  this.doctosapoyoId);
      } )
    .catch( error => { console.log(JSON.stringify(error.data))});

     this.loading= false;


    },
  },

  data() {
    return {
      doctosapoyoId  : '0',
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