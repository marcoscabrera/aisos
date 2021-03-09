<template>
                  <v-row>
                    <v-col cols="12" xs="12" sm="6" md="6">
                      <v-text-field
                        :label="textoDescriptivo"
                        single-line
                        filled
                        readOnly
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" xs="12" sm="6" md="6">
                          <v-select
                            :value="valor"
                            :items="itemsOpciones"
                            :label="nombrePermiso"
                            dense
                            filled
                            @change="asignarValor($event)"
                          >
                          </v-select>

                        </v-col>
                      </v-row>
</template>

<script>
    export default {
        props: {
            textoDescriptivo: {
                type: String,
                default: ''
            },
            valor :{
                type :String,
                default : ''
            },
            nombrePermiso : {
                type:String,
                default :''
            },
            accion_A_ejecutar :{
                type:String,
                default :''
            },
            itemsOpciones : {
                type:Array
            }
        },
        data() {
            return {
                //itemsOpciones: ["SI","NO"]
            }
        },

        methods: {
            asignarValor(evento) {

                this.$store.dispatch(this.accion_A_ejecutar,evento);
                
            }
        },
        
    }
</script>

<style scoped>

</style>