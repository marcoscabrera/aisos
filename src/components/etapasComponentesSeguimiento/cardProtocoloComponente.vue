<template>
      <v-card width="100%">
        <v-card-title>  SE CUENTA CON PROTOCOLO SOS 
       </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-select
                :value="valorcombo"
                :item-value="valorcombo"
                :items="itemsOpciones"
                label="PROTOCOLO SOS"
                dense
                filled
                @change="asignarValor($event)"
              >
              </v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">
             <!-- aqui va fileupload -->
               <v-btn
               color="primary"
               dark
               block
               @click="irA_docto"
               >
                {{ textoRespuesta }}
               </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>


</template>

<script>
    export default {

        name :'cardProtocoloComponente',

        data() {
            return {
                itemsOpciones:["SI","NO","PENDIENTE"],
                texto : ''
            }
        },
    props: {
        valorcombo: {
            type: String,
            default: ''
        },
        esDenuncia :{
            type: Boolean,
            default: true
        },
        incidenteId :{
            type : String,
            default : '0'
        },
        textoRespuesta : {
            type: String ,
            default : ''
        }
    },
    methods: {
        asignarValor(event) {
            this.$store.dispatch('action_protocolosos',event);
        },

        irA_docto(){
             
            this.$store.dispatch("setear_Incidente",this.incidenteId );
     
           if( this.textoRespuesta=="DENUNCIA LEGAL" ){
             this.$router.push({ name: "DenunciaLegal", params: { denunciaId: this.incidenteId } });

           }else{
          
             this.$router.push({ name: "InvestigacionInterna", params: { incidenteId: this.incidenteId } });
           }

           if(this.textoRespuesta=="ABORDAJE INTERNO") {

           this.$router.push({ name: "AbordajeInterno", params: { incidenteId: this.incidenteId } });
        

           }
            
        }
    },
        
    }
</script>

<style scoped>

</style>